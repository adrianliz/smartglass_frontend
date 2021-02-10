import { Component, OnInit } from '@angular/core';
import { MachinesService } from '../../services/machines.service';
import { Machine } from '../../models/machine.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  machines: Machine[];

  constructor(private service: MachinesService) { }

  ngOnInit(): void {
    this.machines = this.service.getAll();
  }
}
