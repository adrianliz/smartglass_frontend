import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import {
	ErrorResponse,
	MaterialResponse,
	OptimizationResponse,
	RatioResponse,
	TimeDistributionResponse,
	ToolsResponse,
} from '../models/backend-response.model';
import { PeriodId } from '../models/period.model';
import { Ratio } from '../models/ratio.model';
import { ChartModel, ImageModel, StatisticId, TableModel } from '../models/statistic.model';
import { BreakdownsPipe } from '../pipes/breakdowns.pipe';
import { MaterialsPipe } from '../pipes/materials.pipe';
import { OptimizationsPipe } from '../pipes/optimizations.pipe';
import { RatioPipe } from '../pipes/ratio.pipe';
import { TimeDistributionPipe } from '../pipes/time-distribution.pipe';
import { ToolsPipe } from '../pipes/tools.pipe';

@Injectable()
export class StatisticsService {
	private readonly statisticsBaseURL: string;
	private statisticModels: Map<
		StatisticId,
		(twinName: string, periodId: PeriodId) => Observable<ChartModel | TableModel | ImageModel>
	>;

	constructor(
		private http: HttpClient,
		private ratioPipe: RatioPipe,
		private materialsUsagePipe: MaterialsPipe,
		private timeDistributionPipe: TimeDistributionPipe,
		private breakdownsPipe: BreakdownsPipe,
		private toolsInfoPipe: ToolsPipe,
		private optimizationsPipe: OptimizationsPipe
	) {
		this.statisticsBaseURL = environment.statisticsBaseURL;
		this.statisticModels = new Map();
		this.statisticModels.set(StatisticId.MATERIALS_USED, this.getMaterialsUsed);
		this.statisticModels.set(StatisticId.OPTIMIZATIONS_PROCESSED, this.getOptimizationsProcessed);
		this.statisticModels.set(StatisticId.TOOLS_INFO, this.getToolsInfo);
		this.statisticModels.set(StatisticId.TIME_DISTRIBUTION, this.getTimeDistribution);
		this.statisticModels.set(StatisticId.ERRORS_PRODUCED, this.getErrorsProduced);
	}

	private getMaterialsUsed(twinName: string, periodId: PeriodId): Observable<ChartModel> {
		const url = `${this.statisticsBaseURL}/${twinName}/materials`;
		const params = new HttpParams().set('period', periodId);

		return this.http
			.get<MaterialResponse[]>(url, { params })
			.pipe(
				map<MaterialResponse[], ChartModel>((res) => this.materialsUsagePipe.transform(res))
			);
	}

	private getOptimizationsProcessed(twinName: string, periodId: PeriodId): Observable<TableModel> {
		const url = `${this.statisticsBaseURL}/${twinName}/optimizations`;
		const params = new HttpParams().set('period', periodId);

		return this.http
			.get<OptimizationResponse[]>(url, { params })
			.pipe(
				map<OptimizationResponse[], TableModel>((res) => this.optimizationsPipe.transform(res))
			);
	}

	private getToolsInfo(twinName: string, periodId: PeriodId): Observable<ImageModel> {
		const url = `${this.statisticsBaseURL}/${twinName}/tools`;
		const params = new HttpParams().set('twinName', twinName).set('period', periodId);

		return this.http
			.get<ToolsResponse>(url, { params })
			.pipe(
				map<ToolsResponse, ImageModel>((res) => this.toolsInfoPipe.transform(res))
			);
	}

	private getTimeDistribution(twinName: string, periodId: PeriodId): Observable<ChartModel> {
		const url = `${this.statisticsBaseURL}/${twinName}/time-distribution`;
		const params = new HttpParams().set('period', periodId);

		return this.http
			.get<TimeDistributionResponse>(url, { params })
			.pipe(
				map<TimeDistributionResponse, ChartModel>((res) => this.timeDistributionPipe.transform(res))
			);
	}

	private getErrorsProduced(twinName: string, periodId: PeriodId): Observable<TableModel> {
		const url = `${this.statisticsBaseURL}/${twinName}/errors`;
		const params = new HttpParams().set('period', periodId);

		return this.http
			.get<ErrorResponse[]>(url, { params })
			.pipe(
				map<ErrorResponse[], TableModel>((res) => this.breakdownsPipe.transform(res))
			);
	}

	getRatios(twinName: string): Observable<Ratio[]> {
		const url = `${this.statisticsBaseURL}/${twinName}/ratios`;
		const params = new HttpParams().set('period', PeriodId.ALL);

		return this.http
			.get<RatioResponse[]>(url, { params })
			.pipe(
				map<RatioResponse[], Ratio[]>((res) => res.map((rawResponse) => this.ratioPipe.transform(rawResponse)))
			);
	}

	getStatisticModel(
		twinName: string,
		id: StatisticId,
		periodId: PeriodId
	): Observable<ChartModel | TableModel | ImageModel> | undefined {
		return this.statisticModels.get(id)?.call(this, twinName, periodId);
	}
}
