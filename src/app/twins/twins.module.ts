import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
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

import { StatisticItemDirective } from './directives/statistic-item.directive';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TwinComponent } from './pages/twin/twin.component';
import { TwinsComponent } from './pages/twins/twins.component';
import { BreakdownsPipe } from './pipes/breakdowns.pipe';
import { DisplayedLabelsPipe } from './pipes/displayed-labels.pipe';
import { MaterialsPipe } from './pipes/materials.pipe';
import { OptimizationsPipe } from './pipes/optimizations.pipe';
import { PercentagePipe } from './pipes/percentage.pipe';
import { RatioPipe } from './pipes/ratio.pipe';
import { TableKeysPipe } from './pipes/table-keys.pipe';
import { TimeDistributionPipe } from './pipes/time-distribution.pipe';
import { ToolsPipe } from './pipes/tools.pipe';
import { TwinPipe } from './pipes/twin.pipe';
import { StatisticsService } from './services/statistics.service';
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
		StatisticChartComponent,
		StatisticTableComponent,
		StatisticImageComponent,
		PercentagePipe,
		TwinPipe,
		RatioPipe,
		MaterialsPipe,
		TimeDistributionPipe,
		BreakdownsPipe,
		TableKeysPipe,
		DisplayedLabelsPipe,
		OptimizationsPipe,
		ToolsPipe,
		StatisticItemDirective,
	],
	imports: [CommonModule, TwinsRoutingModule, SharedModule, MaterialModule, NgxGaugeModule, ChartsModule],
	providers: [
		TwinsService,
		StatisticsService,
		TwinPipe,
		RatioPipe,
		MaterialsPipe,
		TimeDistributionPipe,
		OptimizationsPipe,
		ToolsPipe,
		BreakdownsPipe,
	],
})
export class TwinsModule {}
