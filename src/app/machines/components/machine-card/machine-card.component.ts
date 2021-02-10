import {Component, Input} from '@angular/core';
import {Machine, MachineStatus} from '../../models/machine.model';

@Component({
  selector: 'app-machine-card',
  templateUrl: './machine-card.component.html',
  styleUrls: ['./machine-card.component.css']
})
export class MachineCardComponent {
  @Input() machine: Machine;

  constructor() {
  }

  public getStatusStyle(status: MachineStatus): object {
    return {
      'bg-success': status === MachineStatus.Activa,
      'bg-warning': status === MachineStatus.En_espera,
      'bg-danger': status === MachineStatus.Parada,
      'bg-secondary': status === MachineStatus.Indefinido
    };
  }
}
