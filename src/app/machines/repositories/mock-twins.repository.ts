import { Injectable } from '@angular/core';
import { Twin, TwinStatus } from '../models/twin.model';
import { TwinsRepository } from './twins.repository';

@Injectable()
export class MockMachines extends TwinsRepository {
	getAll(): Twin[] {
		return [
			{
				id: 1,
				name: 'twin 1',
				series: 'TUR 3045',
				model: 'RUBI 403 VAC-6',
				status: TwinStatus.IN_STANDBY,
				img: 'assets/img/machine1.png'
			},
			{
				id: 2,
				name: 'twin 2',
				series: 'TUR 8053',
				model: 'LAM 515TX',
				status: TwinStatus.DOING_PROCESS,
				img: 'assets/img/machine2.png'
			},
			{
				id: 3,
				name: 'twin 3',
				series: 'TUR 8053',
				model: 'RUBI 403 VAC-6',
				status: TwinStatus.IN_STANDBY,
				img: 'assets/img/machine1.png'
			},
			{
				id: 4,
				name: 'twin 4',
				series: 'TUR 8053',
				model: 'LAM 515TX',
				status: TwinStatus.IN_BREAKDOWN,
				img: 'assets/img/machine2.png'
			},
			{
				id: 5,
				name: 'twin 5',
				series: 'TUR 8053',
				model: 'RUBI 403 VAC-6',
				status: TwinStatus.DOING_PROCESS,
				img: 'assets/img/machine1.png'
			}
		];
	}
}
