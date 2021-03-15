import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
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
import { Chart, ChartName, ChartType, Period, Table, TableName } from '../models/statistic.model';
import { Twin } from '../models/twin.model';

@Injectable()
export class TwinsService {
	private readonly twinsBaseURL: string;
	private chartCallbacks: Map<ChartName, (twinName: string, period: Period) => Observable<Chart>>;
	private tableCallbacks: Map<TableName, (twinName: string, period: Period) => Observable<Table>>;

	constructor(private http: HttpClient) {
		this.twinsBaseURL = environment.twinsBaseURL;
		this.chartCallbacks = new Map();
		this.chartCallbacks.set(ChartName.MATERIALS_USAGE, this.getMaterialsUsage);
		this.chartCallbacks.set(ChartName.PROCESSES_INFO, this.getProcessesInfo);
		this.tableCallbacks = new Map();
		this.tableCallbacks.set(TableName.BREAKDOWNS, this.getBreakdowns);
	}

	private getMaterialsUsage(twinName: string, period: Period): Observable<Chart> {
		const url = `${ this.twinsBaseURL }/materials-usage`;
		const params = new HttpParams().set('twinName', twinName).set('period', period);

		return this.http.get<MaterialUsageResponse[]>(url, { params }).pipe(
			map<MaterialUsageResponse[], Chart>(res => {
				const chart: Chart =
					{ name: ChartName.MATERIALS_USAGE, labels: [], data: [], type: ChartType.DOUGHNUT };

				res.forEach(usage => {
					chart.labels.push(usage.name);
					chart.data.push(usage.usedTimes);
				});
				return chart;
			})
		);
	}

	private getProcessesInfo(twinName: string, period: Period): Observable<Chart> {
		const url = `${ this.twinsBaseURL }/processes-info`;
		const params = new HttpParams().set('twinName', twinName).set('period', period);

		return this.http.get<ProcessesInfoResponse>(url, { params }).pipe(
			map<ProcessesInfoResponse, Chart>(res => {
				const chart: Chart =
					{
						name: ChartName.PROCESSES_INFO, labels: Object.keys(res), data: Object.values(res),
						type: ChartType.DOUGHNUT
					};

				return chart;
			})
		);
	}

	private getBreakdowns(twinName: string, period: Period): Observable<Table> {
		const url = `${ this.twinsBaseURL }/breakdowns`;
		const params = new HttpParams().set('twinName', twinName).set('period', period);

		return this.http.get<BreakdownResponse[]>(url, { params }).pipe(
			map<BreakdownResponse[], Table>(res => {
				const table: Table =
					{ name: TableName.BREAKDOWNS, columns: ['errorName', 'timesOccurred'], dataSource: new MatTableDataSource(res) };
				return table;
			})
		);
	}

	getTwins(): Observable<Twin[]> {
		return this.http.get<TwinResponse[]>(this.twinsBaseURL).pipe(
			map<TwinResponse[], Twin[]>(res => res.map(o => {
				return {
					name: o.name,
					series: o.series,
					model: o.model,
					state: o.state,
					img: 'assets/img/machine1.png' // TODO: mapping based on model
				};
			}))
		);
	}

	getRatios(twinName: string): Observable<RatioResponse[]> {
		const url = `${ this.twinsBaseURL }/ratios`;
		const params = new HttpParams().set('twinName', twinName).set('period', Period.ALL);

		return this.http.get<RatioResponse[]>(url, { params });
	}

	getStatisticChart(twinName: string, name: ChartName, period: Period): Observable<Chart> | undefined {
		return this.chartCallbacks.get(name)?.call(this, twinName, period);
	}

	getStatisticTable(twinName: string, name: TableName, period: Period): Observable<Table> | undefined {
		return this.tableCallbacks.get(name)?.call(this, twinName, period);
	}
}
