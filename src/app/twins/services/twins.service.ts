import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { TwinModelResponse } from '../models/backend-response.model';
import { TwinModel } from '../models/twin.model';
import { TwinModelPipe } from '../pipes/twinModel.pipe';

@Injectable()
export class TwinsService {
	private readonly twinsBaseURL: string;

	constructor(private http: HttpClient, private twinPipe: TwinModelPipe) {
		this.twinsBaseURL = environment.twinsBaseURL;
	}

	getTwinModels(): Observable<TwinModel[]> {
		const url = `${this.twinsBaseURL}/models`;

		return this.http.get<TwinModelResponse[]>(url).pipe(
			map<TwinModelResponse[], TwinModel[]>((res) => res.map((rawResponse) => this.twinPipe.transform(rawResponse)))
		);
	}

	getTwinModel(twinName: string): Observable<TwinModel> {
		const url = `${this.twinsBaseURL}/${twinName}/model`;

		return this.http.get<TwinModelResponse>(url).pipe(
			map<TwinModelResponse, TwinModel>((res) => this.twinPipe.transform(res))
		);
	}
}
