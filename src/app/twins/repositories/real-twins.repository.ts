import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { RatioResponse, TwinResponse } from '../models/backend-response.model';
import { Ratio, Twin } from '../models/twin.model';
import { TwinsRepository } from './twins.repository';

@Injectable()
export class RealTwins extends TwinsRepository {
	private readonly twinsBaseURL: string;

	constructor(private http: HttpClient) {
		super();
		this.twinsBaseURL = environment.twinsBaseURL;
	}

	getAll(): Observable<Twin[]> {
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
		const params = new HttpParams().set('twinName', twinName).set('period', 'ALL'); // TODO: selector in view

		return this.http.get<RatioResponse[]>(url, { params }).pipe(
			map<RatioResponse[], Ratio[]>(res => res)
		);
	}
}
