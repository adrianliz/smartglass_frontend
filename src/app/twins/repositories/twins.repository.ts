import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ratio, Twin } from '../models/twin.model';

@Injectable()
export abstract class TwinsRepository {
	abstract getAll(): Observable<Twin[]>;

	abstract getRatios(twinName: string): Observable<Ratio[]>;
}
