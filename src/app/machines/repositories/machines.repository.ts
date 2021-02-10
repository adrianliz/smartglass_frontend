import {Injectable} from '@angular/core';
import {Machine} from '../models/machine.model';

@Injectable()
export abstract class MachinesRepository {
  abstract getAll(): Machine[];
}
