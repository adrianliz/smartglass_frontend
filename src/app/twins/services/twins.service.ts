import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import {
	BreakdownResponse,
	MaterialUsageResponse,
	ProcessesInfoResponse,
	RatioResponse,
	TwinResponse
} from '../models/backend-response.model';
import { ChartType, StatisticChart, StatisticPeriod, StatisticTable, StatisticType } from '../models/statistic.model';
import { Ratio, Twin } from '../models/twin.model';

@Injectable()
export class TwinsService {
	private readonly twinsBaseURL: string;

	constructor(private http: HttpClient) {
		this.twinsBaseURL = environment.twinsBaseURL;
	}

	getTwins(): Observable<Twin[]> {
		return this.http.get<TwinResponse[]>(this.twinsBaseURL).pipe(
			map<TwinResponse[], Twin[]>(res => res.map(o => {
				return {
					name: o.name,
					series: o.series,
					model: o.model,
					state: o.state,
					img: 'assets/img/machine1.png' // TODO: some mapping based on model
				};
			}))
		);
	}

	getRatios(twinName: string): Observable<Ratio[]> {
		const url = `${ this.twinsBaseURL }/ratios`;
		const params = new HttpParams().set('twinName', twinName).set('period', StatisticPeriod.ALL);

		return this.http.get<RatioResponse[]>(url, { params }).pipe(
			map<RatioResponse[], Ratio[]>(res => res)
		);
	}

	getMaterialsUsage(twinName: string): Observable<StatisticChart> {
		const url = `${ this.twinsBaseURL }/materials-usage`;
		const params = new HttpParams().set('twinName', twinName).set('period', StatisticPeriod.ALL);

		return this.http.get<MaterialUsageResponse[]>(url, { params }).pipe(
			map<MaterialUsageResponse[], StatisticChart>(res => {
				const chart: StatisticChart =
					{ name: StatisticType.MATERIALS_USAGE, labels: [], data: [], type: ChartType.DOUGHNUT };

				res.forEach(usage => {
					chart.labels.push(usage.name);
					chart.data.push(usage.usedTimes);
				});
				return chart;
			})
		);
	}

	getProcessesInfo(twinName: string): Observable<StatisticChart> {
		const url = `${ this.twinsBaseURL }/processes-info`;
		const params = new HttpParams().set('twinName', twinName).set('period', StatisticPeriod.ALL);

		return this.http.get<ProcessesInfoResponse>(url, { params }).pipe(
			map<ProcessesInfoResponse, StatisticChart>(res => {
				const chart: StatisticChart =
					{ name: StatisticType.PROCESSES_INFO, labels: Object.keys(res), data: Object.values(res), type: ChartType.DOUGHNUT };

				return chart;
			})
		);
	}

	getBreakdowns(twinName: string): Observable<StatisticTable> {
		const url = `${ this.twinsBaseURL }/breakdowns`;
		const params = new HttpParams().set('twinName', twinName).set('period', StatisticPeriod.ALL);

		return this.http.get<BreakdownResponse[]>(url, { params }).pipe(
			map<BreakdownResponse[], StatisticTable>(res => {
				const table: StatisticTable =
					{ name: StatisticType.BREAKDOWNS, columns: ['errorName', 'timesOccurred'], dataSource: of(res) };
				return table;
			})
		);
	}
}
