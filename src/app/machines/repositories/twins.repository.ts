import { Injectable } from '@angular/core';
import { Twin } from '../models/twin.model';

@Injectable()
export abstract class TwinsRepository {
	abstract getAll(): Twin[];
}
