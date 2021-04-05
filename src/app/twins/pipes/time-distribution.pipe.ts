import { Pipe, PipeTransform } from '@angular/core';
import { TimeDistributionResponse } from '../models/backend-response.model';
import { ChartModel } from '../models/statistic.model';

@Pipe({
	name: 'timeDistributionPipe',
})
export class TimeDistributionPipe implements PipeTransform {
	transform(timeDistribution: TimeDistributionResponse): ChartModel {
		const chart: ChartModel = {
			labels: ['Horas procesando hojas', 'Horas cargando hojas', 'Horas en standby'],
			datasets: [{ data: [] }],
			type: 'doughnut',
			options: {},
		};

		Object.values(timeDistribution).forEach((hours) => {
			chart.datasets[0].data?.push(hours);
		});

		return chart;
	}
}
