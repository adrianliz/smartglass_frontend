import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MachinesRoutingModule } from './machines-routing.module';

// Componentes
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MachineCardComponent } from './components/machine-card/machine-card.component';

// Providers
import { MachinesService } from './services/machines.service';
import { MachinesRepository } from './repositories/machines.repository';
import { MockMachines } from './repositories/mock-machines.repository';

@NgModule({
  declarations: [
    DashboardComponent,
    MachineCardComponent
  ],
  imports: [
    CommonModule,
    MachinesRoutingModule
  ],
  providers: [
    MachinesService,
    {provide: MachinesRepository, useClass: MockMachines}
  ]
})
export class MachinesModule { }
