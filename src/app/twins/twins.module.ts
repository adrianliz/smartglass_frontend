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
import { BreakdownsPipe } from './pipes/breakdowns.pipe';
import { DisplayedLabelsPipe } from './pipes/displayed-labels.pipe';
import { MaterialsUsagePipe } from './pipes/materials-usage.pipe';
import { PercentagePipe } from './pipes/percentage.pipe';
import { ProcessesInfoPipe } from './pipes/processes-info.pipe';
import { RatioPipe } from './pipes/ratio.pipe';
import { TableKeysPipe } from './pipes/table-keys.pipe';
import { TwinPipe } from './pipes/twin.pipe';

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
		TwinPipe,
		RatioPipe,
		MaterialsUsagePipe,
		ProcessesInfoPipe,
		BreakdownsPipe,
		TableKeysPipe,
		DisplayedLabelsPipe,
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
		TwinsService,
		TwinPipe,
		RatioPipe,
		MaterialsUsagePipe,
		ProcessesInfoPipe,
		BreakdownsPipe
	]
})
export class TwinsModule {
}
