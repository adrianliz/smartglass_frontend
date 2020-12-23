import { Injectable } from '@angular/core';
import { Machine, MachineStatus } from './../models/machine.model';
import { MachinesRepository } from './machines.repository';

@Injectable()
export class MockMachines extends MachinesRepository {
  getAll(): Machine[] {
    return [
      {
        id: 1,
        name: 'máquina1',
        serie: 'TUR 3045',
        model: 'RUBI 403 VAC-6',
        status: MachineStatus.Activa,
        img: 'assets/img/maquina1.png'
      },
      {
        id: 2,
        name: 'máquina 2',
        serie: 'TUR 8053',
        model: 'LAM 515TX',
        status: MachineStatus.En_espera,
        img: 'assets/img/maquina2.png'
      },
      {
        id: 3,
        name: 'máquina 3',
        serie: 'TUR 8053',
        model: 'RUBI 403 VAC-6',
        status: MachineStatus.Indefinido,
        img: 'assets/img/maquina1.png'
      },
      {
        id: 4,
        name: 'máquina 4',
        serie: 'TUR 8053',
        model: 'LAM 515TX',
        status: MachineStatus.Parada,
        img: 'assets/img/maquina2.png'
      },
      {
        id: 5,
        name: 'máquina 5',
        serie: 'TUR 8053',
        model: 'RUBI 403 VAC-6',
        status: MachineStatus.En_espera,
        img: 'assets/img/maquina1.png'
      }
    ];
  }
}
