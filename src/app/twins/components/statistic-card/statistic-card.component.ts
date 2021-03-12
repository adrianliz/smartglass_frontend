import { Component, Input } from '@angular/core';
import { StatisticChart, StatisticTable } from '../../models/statistic.model';

@Component({
	selector: 'app-statistic-card',
	templateUrl: './statistic-card.component.html',
	styles: []
})
export class StatisticCardComponent {
	@Input() name = '';
	@Input() chart?: StatisticChart;
	@Input() table?: StatisticTable;

	constructor() {
	}
}
