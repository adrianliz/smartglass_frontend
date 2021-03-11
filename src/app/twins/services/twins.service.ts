import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ratio, Twin } from '../models/twin.model';
import { TwinsRepository } from '../repositories/twins.repository';

@Injectable()
export class TwinsService {

	constructor(private repository: TwinsRepository) {
	}

	public getAll(): Observable<Twin[]> {
		return this.repository.getAll();
	}

	public getRatios(twinName: string): Observable<Ratio[]> {
		return this.repository.getRatios(twinName);
	}
}
