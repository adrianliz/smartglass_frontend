import { Injectable } from '@angular/core';
import { Twin } from '../models/twin.model';
import { TwinsRepository } from '../repositories/twins.repository';

@Injectable()
export class TwinsService {

	constructor(private repository: TwinsRepository) {
	}

	public getAll(): Twin[] {
		return this.repository.getAll();
	}
}
