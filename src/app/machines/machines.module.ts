import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MachinesRoutingModule } from './machines-routing.module';

// Pages
import { HomeComponent } from './pages/home/home.component';
import { MachineComponent } from './pages/machine/machine.component';

// Components
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MachineCardComponent } from './components/machine-card/machine-card.component';

// Providers
import { MachinesService } from './services/machines.service';
import { MachinesRepository } from './repositories/machines.repository';
import { MockMachines } from './repositories/mock-machines.repository';

@NgModule({
  declarations: [
    HomeComponent,
    DashboardComponent,
    MachineCardComponent,
    MachineComponent
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
