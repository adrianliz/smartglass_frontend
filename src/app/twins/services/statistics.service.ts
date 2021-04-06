import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import {
	ErrorResponse,
	MachineUsageResponse,
	MaterialResponse,
	OptimizationResponse,
	RatioResponse,
	TimeDistributionResponse,
	ToolsResponse,
} from '../models/backend-response.model';
import { API_DATE_FORMAT, DATE_RANGES, PeriodId, StatisticId } from '../models/consts';
import { Ratio } from '../models/ratio.model';
import { ChartModel, ImageModel, TableModel } from '../models/statistic.model';
import { DaysSplitterPipe } from '../pipes/days-splitter.pipe';
import { ErrorsPipe } from '../pipes/errors.pipe';
import { MachineUsagePipe } from '../pipes/machine-usage.pipe';
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
		private daysSplitterPipe: DaysSplitterPipe,
		private ratioPipe: RatioPipe,
		private materialsPipe: MaterialsPipe,
		private machineUsagePipe: MachineUsagePipe,
		private optimizationsPipe: OptimizationsPipe,
		private toolsPipe: ToolsPipe,
		private timeDistributionPipe: TimeDistributionPipe,
		private errorsPipe: ErrorsPipe
	) {
		this.statisticsBaseURL = environment.statisticsBaseURL;

		this.statisticModels = new Map();
		this.statisticModels.set(StatisticId.MATERIALS_USED, this.getMaterialsUsed);
		this.statisticModels.set(StatisticId.MACHINE_USAGE, this.getMachineUsage);
		this.statisticModels.set(StatisticId.OPTIMIZATIONS_PROCESSED, this.getOptimizationsProcessed);
		this.statisticModels.set(StatisticId.TOOLS_INFO, this.getToolsInfo);
		this.statisticModels.set(StatisticId.TIME_DISTRIBUTION, this.getTimeDistribution);
		this.statisticModels.set(StatisticId.ERRORS_PRODUCED, this.getErrorsProduced);
	}

	private static getHttpParams(periodId: PeriodId): HttpParams | undefined {
		const dateRange = DATE_RANGES.get(periodId);

		if (dateRange) {
			return new HttpParams()
				.set('startDate', dateRange.startDate.format(API_DATE_FORMAT))
				.set('endDate', dateRange.endDate.format(API_DATE_FORMAT));
		}
		return undefined;
	}

	private getMaterialsUsed(twinName: string, periodId: PeriodId): Observable<ChartModel> {
		const url = `${this.statisticsBaseURL}/${twinName}/materials-used`;
		const params = StatisticsService.getHttpParams(periodId);

		return this.http
			.get<MaterialResponse[]>(url, { params })
			.pipe(
				map<MaterialResponse[], ChartModel>((res) => this.materialsPipe.transform(res))
			);
	}

	private getMachineUsage(twinName: string, periodId: PeriodId): Observable<ChartModel> {
		const dateRange = DATE_RANGES.get(periodId);
		const machineUsages: Observable<MachineUsageResponse>[] = [];

		if (dateRange) {
			const url = `${this.statisticsBaseURL}/${twinName}/machine-usage`;

			this.daysSplitterPipe.transform(dateRange).forEach((day) => {
				const params = new HttpParams()
					.set('startDate', day.startDate.format(API_DATE_FORMAT))
					.set('endDate', day.endDate.format(API_DATE_FORMAT));

				machineUsages.push(
					this.http.get<MachineUsageResponse>(url, { params })
				);
			});
		}

		return forkJoin(machineUsages).pipe(
			map<MachineUsageResponse[], ChartModel>((res) => this.machineUsagePipe.transform(res))
		);
	}

	private getOptimizationsProcessed(twinName: string, periodId: PeriodId): Observable<TableModel> {
		const url = `${this.statisticsBaseURL}/${twinName}/optimizations-processed`;
		const params = StatisticsService.getHttpParams(periodId);

		return this.http
			.get<OptimizationResponse[]>(url, { params })
			.pipe(
				map<OptimizationResponse[], TableModel>((res) => this.optimizationsPipe.transform(res))
			);
	}

	private getToolsInfo(twinName: string, periodId: PeriodId): Observable<ImageModel> {
		const url = `${this.statisticsBaseURL}/${twinName}/tools-info`;
		const params = StatisticsService.getHttpParams(periodId);

		return this.http
			.get<ToolsResponse>(url, { params })
			.pipe(
				map<ToolsResponse, ImageModel>((res) => this.toolsPipe.transform(res))
			);
	}

	private getTimeDistribution(twinName: string, periodId: PeriodId): Observable<ChartModel> {
		const url = `${this.statisticsBaseURL}/${twinName}/time-distribution`;
		const params = StatisticsService.getHttpParams(periodId);

		return this.http
			.get<TimeDistributionResponse>(url, { params })
			.pipe(
				map<TimeDistributionResponse, ChartModel>((res) => this.timeDistributionPipe.transform(res))
			);
	}

	private getErrorsProduced(twinName: string, periodId: PeriodId): Observable<TableModel> {
		const url = `${this.statisticsBaseURL}/${twinName}/errors-produced`;
		const params = StatisticsService.getHttpParams(periodId);

		return this.http
			.get<ErrorResponse[]>(url, { params })
			.pipe(
				map<ErrorResponse[], TableModel>((res) => this.errorsPipe.transform(res))
			);
	}

	getRatios(twinName: string): Observable<Ratio[]> {
		const url = `${this.statisticsBaseURL}/${twinName}/ratios`;
		const params = StatisticsService.getHttpParams(PeriodId.THIS_YEAR);

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
