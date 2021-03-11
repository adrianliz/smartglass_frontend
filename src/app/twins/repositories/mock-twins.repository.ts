import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { RatioType } from '../models/backend-response.model';
import { Ratio, Twin, TwinState } from '../models/twin.model';
import { TwinsRepository } from './twins.repository';

@Injectable()
export class MockTwins extends TwinsRepository {
	getAll(): Observable<Twin[]> {
		return of([
			{
				name: 'twin 1',
				series: 'TUR 3045',
				model: 'RUBI 403 VAC-6',
				state: TwinState.IN_STANDBY,
				img: 'assets/img/machine1.png'
			},
			{
				name: 'twin 2',
				series: 'TUR 8053',
				model: 'LAM 515TX',
				state: TwinState.DOING_PROCESS,
				img: 'assets/img/machine2.png'
			},
			{
				name: 'twin 3',
				series: 'TUR 8053',
				model: 'RUBI 403 VAC-6',
				state: TwinState.IN_STANDBY,
				img: 'assets/img/machine1.png'
			},
			{
				name: 'twin 4',
				series: 'TUR 8053',
				model: 'LAM 515TX',
				state: TwinState.IN_BREAKDOWN,
				img: 'assets/img/machine2.png'
			},
			{
				name: 'twin 5',
				series: 'TUR 8053',
				model: 'RUBI 403 VAC-6',
				state: TwinState.DOING_PROCESS,
				img: 'assets/img/machine1.png'
			}
		]);
	}

	getRatios(twinName: string): Observable<Ratio[]> {
		return of([
			{
				ratio: RatioType.AVAILABILITY,
				value: 1
			},
			{
				ratio: RatioType.EFFICIENCY,
				value: 0.5
			},
			{
				ratio: RatioType.EFFECTIVENESS,
				value: 0.9
			},
		]);
	}
}
