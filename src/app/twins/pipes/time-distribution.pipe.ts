import { Pipe, PipeTransform } from '@angular/core';
import { TimeDistributionResponse, TimeDistribution } from '../models/backend-response.model';
import { ChartModel, ChartType } from '../models/statistic.model';

@Pipe({
	name: 'timeDistributionPipe',
})
export class TimeDistributionPipe implements PipeTransform {
	transform(value: TimeDistributionResponse): ChartModel {
		const chart: ChartModel = {
			labels: [
				{
					id: TimeDistribution.PROCESSING_GLASS,
					name: 'Horas procesando hojas',
				},
				{
					id: TimeDistribution.LOADING_GLASS,
					name: 'Horas cargando hojas',
				},
				{
					id: TimeDistribution.STANDBY,
					name: 'Horas en standby',
				},
			],
			data: [],
			type: ChartType.DOUGHNUT,
		};

		// TODO not include label if hours <= 0
		Object.values(value).forEach((hours) => {
			if (hours > 0) {
				chart.data.push(hours);
			}
		});

		return chart;
	}
}
