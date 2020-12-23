import { Component, Input } from '@angular/core';
import { Machine, MachineStatus } from '../../models/machine.model';

@Component({
  selector: 'app-machine-card',
  templateUrl: './machine-card.component.html',
  styleUrls: ['./machine-card.component.css']
})
export class MachineCardComponent {
  @Input() machine: Machine;

  constructor() { }

  public getStatusClass(machine: Machine): object {
    return {'bg-success': machine.status === MachineStatus.Activa,
            'bg-warning': machine.status === MachineStatus.En_espera,
            'bg-danger': machine.status === MachineStatus.Parada,
            'bg-secondary': machine.status === MachineStatus.Indefinido};
  }
}
