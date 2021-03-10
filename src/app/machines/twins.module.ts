import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../material/material.module';

import { TwinCardComponent } from './components/twin-card/twin-card.component';
import { TwinsCardsComponent } from './components/twins-cards/twins-cards.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { TwinsRoutingModule } from './twins-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TwinComponent } from './pages/twin/twin.component';
import { TwinsRepository } from './repositories/twins.repository';
import { MockMachines } from './repositories/mock-twins.repository';

import { TwinsService } from './services/twins.service';

@NgModule({
	declarations: [
		DashboardComponent,
		TwinsCardsComponent,
		TwinCardComponent,
		TwinComponent,
		NavigationComponent
	],
	imports: [
		CommonModule,
		TwinsRoutingModule,
		MaterialModule
	],
	providers: [
		TwinsService,
		{ provide: TwinsRepository, useClass: MockMachines }
	]
})
export class TwinsModule {
}
