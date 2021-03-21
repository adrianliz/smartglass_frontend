import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { TwinResponse } from '../models/backend-response.model';
import { Twin } from '../models/twin.model';
import { TwinPipe } from '../pipes/twin.pipe';

@Injectable()
export class TwinsService {
	private readonly twinsBaseURL: string;

	constructor(private http: HttpClient, private twinPipe: TwinPipe) {
		this.twinsBaseURL = environment.twinsBaseURL;
	}

	getTwins(): Observable<Twin[]> {
		return this.http.get<TwinResponse[]>(this.twinsBaseURL).pipe(
			map<TwinResponse[], Twin[]>((res) => res.map((rawResponse) => this.twinPipe.transform(rawResponse)))
		);
	}

	getTwin(twinName: string): Observable<Twin> {
		const url = `${this.twinsBaseURL}/${twinName}`;

		return this.http.get<TwinResponse>(url).pipe(
			map<TwinResponse, Twin>((res) => this.twinPipe.transform(res))
		);
	}
}
