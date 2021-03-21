import { Component, Input } from '@angular/core';
import { ChartModel, StatisticComponent } from '../../models/statistic.model';

@Component({
	selector: 'app-statistic-chart',
	templateUrl: './statistic-chart.component.html',
	styles: [],
})
export class StatisticChartComponent implements StatisticComponent {
	@Input() model!: ChartModel;

	constructor() {}
}
