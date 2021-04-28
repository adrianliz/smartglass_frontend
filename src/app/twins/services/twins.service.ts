import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { TwinInfoResponse } from '../models/backend-response.model';
import { TwinInfo } from '../models/twin-info';
import { TwinInfoPipe } from '../pipes/twin-info.pipe';

@Injectable()
export class TwinsService {
	private readonly twinsBaseURL: string;

	constructor(private http: HttpClient, private twinInfoPipe: TwinInfoPipe) {
		this.twinsBaseURL = environment.twinsBaseURL;
	}

	getTwinsInfo(): Observable<TwinInfo[]> {
		const url = `${this.twinsBaseURL}/info`;

		return this.http.get<TwinInfoResponse[]>(url).pipe(
			map<TwinInfoResponse[], TwinInfo[]>((res) => res.map((rawResponse) => this.twinInfoPipe.transform(rawResponse)))
		);
	}

	getTwinInfo(twinName: string): Observable<TwinInfo> {
		const url = `${this.twinsBaseURL}/${twinName}/info`;

		return this.http.get<TwinInfoResponse>(url).pipe(
			map<TwinInfoResponse, TwinInfo>((res) => this.twinInfoPipe.transform(res))
		);
	}
}
