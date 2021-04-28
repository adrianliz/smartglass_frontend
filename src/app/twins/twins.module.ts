import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TRANSLOCO_SCOPE, TranslocoModule } from '@ngneat/transloco';
import { ChartsModule } from 'ng2-charts';
import { NgxGaugeModule } from 'ngx-gauge';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { NavigationComponent } from './components/navigation/navigation.component';
import { StatisticCardComponent } from './components/statistic-card/statistic-card.component';
import { StatisticChartComponent } from './components/statistic-chart/statistic-chart.component';
import { StatisticImageComponent } from './components/statistic-image/statistic-image.component';
import { StatisticTableComponent } from './components/statistic-table/statistic-table.component';
import { TwinCardComponent } from './components/twin-card/twin-card.component';

import { PreventDoubleClickDirective } from './directives/prevent-double-click.directive';
import { StatisticItemDirective } from './directives/statistic-item.directive';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TwinComponent } from './pages/twin/twin.component';
import { TwinsComponent } from './pages/twins/twins.component';

import { DaysSplitterPipe } from './pipes/days-splitter.pipe';
import { ErrorsPipe } from './pipes/errors.pipe';
import { MachineUsagePipe } from './pipes/machine-usage.pipe';
import { MaterialsPipe } from './pipes/materials.pipe';
import { OptimizationsPipe } from './pipes/optimizations.pipe';
import { PercentagePipe } from './pipes/percentage.pipe';
import { RatioPipe } from './pipes/ratio.pipe';
import { SecondsToHoursPipe } from './pipes/seconds-to-hours.pipe';
import { TableIdsPipe } from './pipes/table-ids.pipe';
import { TimeDistributionPipe } from './pipes/time-distribution.pipe';
import { ToolsPipe } from './pipes/tools.pipe';
import { TwinInfoPipe } from './pipes/twin-info.pipe';
import { StatisticsService } from './services/statistics.service';
import { TwinsService } from './services/twins.service';
import { TwinsRoutingModule } from './twins-routing.module';

@NgModule({
	declarations: [
		NavigationComponent,
		StatisticCardComponent,
		StatisticChartComponent,
		StatisticTableComponent,
		StatisticImageComponent,
		TwinCardComponent,

		DashboardComponent,
		TwinComponent,
		TwinsComponent,

		DaysSplitterPipe,
		ErrorsPipe,
		MachineUsagePipe,
		MaterialsPipe,
		OptimizationsPipe,
		PercentagePipe,
		RatioPipe,
		SecondsToHoursPipe,
		TableIdsPipe,
		TimeDistributionPipe,
		ToolsPipe,
		TwinInfoPipe,

		StatisticItemDirective,
		PreventDoubleClickDirective,
	],
	imports: [
		CommonModule,
		MaterialModule,
		SharedModule,

		ChartsModule,
		NgxGaugeModule,
		TranslocoModule,

		TwinsRoutingModule,
		ChartsModule,
		ChartsModule,
	],
	providers: [
		StatisticsService,
		TwinsService,

		DaysSplitterPipe,
		ErrorsPipe,
		MachineUsagePipe,
		MaterialsPipe,
		OptimizationsPipe,
		RatioPipe,
		SecondsToHoursPipe,
		TimeDistributionPipe,
		ToolsPipe,
		TwinInfoPipe,
		{ provide: TRANSLOCO_SCOPE, useValue: 'twins' },
	],
})
export class TwinsModule {}
