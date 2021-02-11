import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../material/material.module';

import { MachineCardComponent } from './components/machine-card/machine-card.component';
import { MachinesCardsComponent } from './components/machines-cards/machines-cards.component';
import { MachinesRoutingModule } from './machines-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MachineComponent } from './pages/machine/machine.component';
import { MachinesRepository } from './repositories/machines.repository';
import { MockMachines } from './repositories/mock-machines.repository';

import { MachinesService } from './services/machines.service';
import { NavigationComponent } from './components/navigation/navigation.component';

@NgModule({
	declarations: [
		DashboardComponent,
		MachinesCardsComponent,
		MachineCardComponent,
		MachineComponent,
		NavigationComponent
	],
	imports: [
		CommonModule,
		MaterialModule,
		MachinesRoutingModule,
	],
	providers: [
		MachinesService,
		{ provide: MachinesRepository, useClass: MockMachines }
	]
})
export class MachinesModule {
}
