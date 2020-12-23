import { Component, Input } from '@angular/core';
import { Machine } from '../../models/machine.model';

@Component({
  selector: 'app-machine-card',
  templateUrl: './machine-card.component.html'
})
export class MachineCardComponent {
  @Input() machine: Machine;

  constructor() { }
}
