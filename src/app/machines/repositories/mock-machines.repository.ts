import { Injectable } from '@angular/core';
import { Machine, MachineStatus } from '../models/machine.model';
import { MachinesRepository } from './machines.repository';

@Injectable()
export class MockMachines extends MachinesRepository {
	getAll(): Machine[] {
		return [
			{
				id: 1,
				name: 'machine 1',
				series: 'TUR 3045',
				model: 'RUBI 403 VAC-6',
				status: MachineStatus.Active,
				img: 'assets/img/machine1.png'
			},
			{
				id: 2,
				name: 'machine 2',
				series: 'TUR 8053',
				model: 'LAM 515TX',
				status: MachineStatus.Waiting,
				img: 'assets/img/machine2.png'
			},
			{
				id: 3,
				name: 'machine 3',
				series: 'TUR 8053',
				model: 'RUBI 403 VAC-6',
				status: MachineStatus.Undefined,
				img: 'assets/img/machine1.png'
			},
			{
				id: 4,
				name: 'machine 4',
				series: 'TUR 8053',
				model: 'LAM 515TX',
				status: MachineStatus.Stopped,
				img: 'assets/img/machine2.png'
			},
			{
				id: 5,
				name: 'machine 5',
				series: 'TUR 8053',
				model: 'RUBI 403 VAC-6',
				status: MachineStatus.Waiting,
				img: 'assets/img/machine1.png'
			}
		];
	}
}
