import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import {
	BreakdownResponse,
	MaterialUsageResponse,
	ProcessesInfoResponse,
	RatioResponse,
	TwinResponse
} from '../models/backend-response.model';
import { Chart, ChartId, PeriodId, Ratio, Table, TableId } from '../models/statistic.model';
import { Twin } from '../models/twin.model';
import { BreakdownsPipe } from '../pipes/breakdowns.pipe';
import { MaterialsUsagePipe } from '../pipes/materials-usage.pipe';
import { ProcessesInfoPipe } from '../pipes/processes-info.pipe';
import { RatioPipe } from '../pipes/ratio.pipe';
import { TwinPipe } from '../pipes/twin.pipe';

@Injectable()
export class TwinsService {
	private readonly twinsBaseURL: string;
	private chartCallbacks: Map<ChartId, (twinName: string, periodId: PeriodId) => Observable<Chart>>;
	private tableCallbacks: Map<TableId, (twinName: string, periodId: PeriodId) => Observable<Table>>;

	constructor(
		private http: HttpClient, private twinPipe: TwinPipe, private ratioPipe: RatioPipe,
		private materialsUsagePipe: MaterialsUsagePipe, private processesInfoPipe: ProcessesInfoPipe,
		private breakdownsPipe: BreakdownsPipe) {

		this.twinsBaseURL = environment.twinsBaseURL;
		this.chartCallbacks = new Map();
		this.chartCallbacks.set(ChartId.MATERIALS_USAGE, this.getMaterialsUsage);
		this.chartCallbacks.set(ChartId.PROCESSES_INFO, this.getProcessesInfo);
		this.tableCallbacks = new Map();
		this.tableCallbacks.set(TableId.BREAKDOWNS, this.getBreakdowns);
	}

	private getMaterialsUsage(twinName: string, periodId: PeriodId): Observable<Chart> {
		const url = `${ this.twinsBaseURL }/materials-usage`;
		const params = new HttpParams().set('twinName', twinName).set('period', periodId);

		return this.http.get<MaterialUsageResponse[]>(url, { params }).pipe(
			map<MaterialUsageResponse[], Chart>(res => this.materialsUsagePipe.transform(res))
		);
	}

	private getProcessesInfo(twinName: string, periodId: PeriodId): Observable<Chart> {
		const url = `${ this.twinsBaseURL }/processes-info`;
		const params = new HttpParams().set('twinName', twinName).set('period', periodId);

		return this.http.get<ProcessesInfoResponse>(url, { params }).pipe(
			map<ProcessesInfoResponse, Chart>(res => this.processesInfoPipe.transform(res))
		);
	}

	private getBreakdowns(twinName: string, periodId: PeriodId): Observable<Table> {
		const url = `${ this.twinsBaseURL }/breakdowns`;
		const params = new HttpParams().set('twinName', twinName).set('period', periodId);

		return this.http.get<BreakdownResponse[]>(url, { params }).pipe(
			map<BreakdownResponse[], Table>(res => this.breakdownsPipe.transform(res))
		);
	}

	getTwins(): Observable<Twin[]> {
		return this.http.get<TwinResponse[]>(this.twinsBaseURL).pipe(
			map<TwinResponse[], Twin[]>(res => res.map(rawResponse => this.twinPipe.transform(rawResponse)))
		);
	}

	getTwin(twinName: string): Observable<Twin> {
		const url = `${ this.twinsBaseURL }/${ twinName }`;

		return this.http.get<TwinResponse>(url).pipe(
			map<TwinResponse, Twin>(res => this.twinPipe.transform(res))
		);
	}

	getRatios(twinName: string): Observable<Ratio[]> {
		const url = `${ this.twinsBaseURL }/ratios`;
		const params = new HttpParams().set('twinName', twinName).set('period', PeriodId.ALL);

		return this.http.get<RatioResponse[]>(url, { params }).pipe(
			map<RatioResponse[], Ratio[]>(res => res.map(rawResponse => this.ratioPipe.transform(rawResponse)))
		);
	}

	getStatisticChart(twinName: string, chartId: ChartId, periodId: PeriodId): Observable<Chart> | undefined {
		return this.chartCallbacks.get(chartId)?.call(this, twinName, periodId);
	}

	getStatisticTable(twinName: string, tableId: TableId, periodId: PeriodId): Observable<Table> | undefined {
		return this.tableCallbacks.get(tableId)?.call(this, twinName, periodId);
	}
}
