import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import {
	BreakdownResponse,
	MaterialUsageResponse,
	OptimizationResponse,
	RatioResponse,
	ToolsInfoResponse,
	UsageTimeResponse,
} from '../models/backend-response.model';
import { PeriodId } from '../models/period.model';
import { Ratio } from '../models/ratio.model';
import { ChartModel, ImageModel, StatisticId, TableModel } from '../models/statistic.model';
import { BreakdownsPipe } from '../pipes/breakdowns.pipe';
import { MaterialsUsagePipe } from '../pipes/materials-usage.pipe';
import { OptimizationsPipe } from '../pipes/optimizations.pipe';
import { RatioPipe } from '../pipes/ratio.pipe';
import { ToolsInfoPipe } from '../pipes/tools-info.pipe';
import { UsageTimePipe } from '../pipes/usage-time.pipe';

@Injectable()
export class TwinService {
	private readonly twinsBaseURL: string;
	private statisticModels: Map<
		StatisticId,
		(twinName: string, periodId: PeriodId) => Observable<ChartModel | TableModel | ImageModel>
	>;

	constructor(
		private http: HttpClient,
		private ratioPipe: RatioPipe,
		private materialsUsagePipe: MaterialsUsagePipe,
		private processesInfoPipe: UsageTimePipe,
		private breakdownsPipe: BreakdownsPipe,
		private toolsInfoPipe: ToolsInfoPipe,
		private optimizationsPipe: OptimizationsPipe
	) {
		this.twinsBaseURL = environment.twinsBaseURL;
		this.statisticModels = new Map();
		this.statisticModels.set(StatisticId.MATERIALS_USAGE, this.getMaterialsUsage);
		this.statisticModels.set(StatisticId.USAGE_TIME, this.getUsageTime);
		this.statisticModels.set(StatisticId.OPTIMIZATIONS, this.getOptimizations);
		this.statisticModels.set(StatisticId.TOOLS_INFO, this.getToolsInfo);
		this.statisticModels.set(StatisticId.BREAKDOWNS, this.getBreakdowns);
	}

	private getMaterialsUsage(twinName: string, periodId: PeriodId): Observable<ChartModel> {
		const url = `${this.twinsBaseURL}/materials-usage`;
		const params = new HttpParams().set('twinName', twinName).set('period', periodId);

		return this.http
			.get<MaterialUsageResponse[]>(url, { params })
			.pipe(
				map<MaterialUsageResponse[], ChartModel>((res) => this.materialsUsagePipe.transform(res))
			);
	}

	private getUsageTime(twinName: string, periodId: PeriodId): Observable<ChartModel> {
		const url = `${this.twinsBaseURL}/usage-time`;
		const params = new HttpParams().set('twinName', twinName).set('period', periodId);

		return this.http
			.get<UsageTimeResponse>(url, { params })
			.pipe(
				map<UsageTimeResponse, ChartModel>((res) => this.processesInfoPipe.transform(res))
			);
	}

	private getOptimizations(twinName: string, periodId: PeriodId): Observable<TableModel> {
		const url = `${this.twinsBaseURL}/optimizations`;
		const params = new HttpParams().set('twinName', twinName).set('period', periodId);

		return this.http
			.get<OptimizationResponse[]>(url, { params })
			.pipe(
				map<OptimizationResponse[], TableModel>((res) => this.optimizationsPipe.transform(res))
			);
	}

	private getToolsInfo(twinName: string, periodId: PeriodId): Observable<ImageModel> {
		const url = `${this.twinsBaseURL}/tools-info`;
		const params = new HttpParams().set('twinName', twinName).set('period', periodId);

		return this.http
			.get<ToolsInfoResponse>(url, { params })
			.pipe(
				map<ToolsInfoResponse, ImageModel>((res) => this.toolsInfoPipe.transform(res))
			);
	}

	private getBreakdowns(twinName: string, periodId: PeriodId): Observable<TableModel> {
		const url = `${this.twinsBaseURL}/breakdowns`;
		const params = new HttpParams().set('twinName', twinName).set('period', periodId);

		return this.http
			.get<BreakdownResponse[]>(url, { params })
			.pipe(
				map<BreakdownResponse[], TableModel>((res) => this.breakdownsPipe.transform(res))
			);
	}

	getRatios(twinName: string): Observable<Ratio[]> {
		const url = `${this.twinsBaseURL}/ratios`;
		const params = new HttpParams().set('twinName', twinName).set('period', PeriodId.ALL);

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
