import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { NgxGaugeModule } from 'ngx-gauge';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { NavigationComponent } from './components/navigation/navigation.component';
import { StatisticCardComponent } from './components/statistic-card/statistic-card.component';

import { TwinCardComponent } from './components/twin-card/twin-card.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TwinComponent } from './pages/twin/twin.component';
import { TwinsComponent } from './pages/twins/twins.component';
import { PercentagePipe } from './pipes/percentage.pipe';

import { TwinsService } from './services/twins.service';
import { TwinsRoutingModule } from './twins-routing.module';

@NgModule({
	declarations: [
		DashboardComponent,
		TwinsComponent,
		TwinCardComponent,
		TwinComponent,
		NavigationComponent,
		StatisticCardComponent,
		PercentagePipe,
	],
	imports: [
		CommonModule,
		TwinsRoutingModule,
		SharedModule,
		MaterialModule,
		NgxGaugeModule,
		ChartsModule
	],
	providers: [
		TwinsService
	]
})
export class TwinsModule {
}
