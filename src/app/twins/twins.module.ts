import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxGaugeModule } from 'ngx-gauge';
import { MaterialModule } from '../material/material.module';
import { NavigationComponent } from './components/navigation/navigation.component';

import { TwinCardComponent } from './components/twin-card/twin-card.component';
import { TwinsCardsComponent } from './components/twins-cards/twins-cards.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TwinComponent } from './pages/twin/twin.component';
import { PercentagePipe } from './pipes/percentage.pipe';
import { RealTwins } from './repositories/real-twins.repository';
import { TwinsRepository } from './repositories/twins.repository';

import { TwinsService } from './services/twins.service';
import { TwinsRoutingModule } from './twins-routing.module';

@NgModule({
	declarations: [
		DashboardComponent,
		TwinsCardsComponent,
		TwinCardComponent,
		TwinComponent,
		NavigationComponent,
		PercentagePipe
	],
	imports: [
		CommonModule,
		TwinsRoutingModule,
		MaterialModule,
		NgxGaugeModule
	],
	providers: [
		TwinsService,
		{ provide: TwinsRepository, useClass: RealTwins }
	]
})
export class TwinsModule {
}
