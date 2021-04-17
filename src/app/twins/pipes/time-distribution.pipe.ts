import { Pipe, PipeTransform } from '@angular/core';
import { TimeDistributionResponse } from '../models/backend-response.model';
import { ChartModel } from '../models/statistic.model';
import { SecondsToHoursPipe } from './seconds-to-hours.pipe';

@Pipe({
	name: 'timeDistributionPipe',
})
export class TimeDistributionPipe implements PipeTransform {
	constructor(private secondsToHours: SecondsToHoursPipe) {}

	transform(timeDistribution: TimeDistributionResponse): ChartModel {
		const chart: ChartModel = {
			labels: ['Horas procesando hojas', 'Horas cargando hojas', 'Horas en standby'],
			datasets: [{ data: [] }],
			type: 'doughnut',
			options: {},
		};

		Object.values(timeDistribution).forEach((seconds) => {
			chart.datasets[0].data?.push(this.secondsToHours.transform(seconds));
		});

		return chart;
	}
}
