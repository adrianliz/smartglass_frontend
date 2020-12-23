import { Inject, Injectable } from '@angular/core';
import { MachinesRepository } from './../repositories/machines.repository';
import { Machine } from './../models/machine.model';
import { MachinesModule } from './../machines.module';

@Injectable()
export class MachinesService {

  constructor(private repository: MachinesRepository) { }

  public getAll(): Machine[] {
    return this.repository.getAll();
  }
}
