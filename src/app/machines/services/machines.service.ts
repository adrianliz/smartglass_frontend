import { Injectable } from '@angular/core';
import { Machine } from '../models/machine.model';
import { MachinesRepository } from '../repositories/machines.repository';

@Injectable()
export class MachinesService {

	constructor(private repository: MachinesRepository) {
	}

	public getAll(): Machine[] {
		return this.repository.getAll();
	}
}
