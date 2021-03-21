import { Pipe, PipeTransform } from '@angular/core';
import { UsageTime, UsageTimeResponse } from '../models/backend-response.model';
import { ChartModel, ChartType } from '../models/statistic.model';

@Pipe({
	name: 'usageTime',
})
export class UsageTimePipe implements PipeTransform {
	transform(value: UsageTimeResponse): ChartModel {
		const chart: ChartModel = {
			labels: [
				{
					id: UsageTime.PROCESSING_GLASS,
					name: 'Horas procesando hojas',
				},
				{
					id: UsageTime.LOADING_GLASS,
					name: 'Horas cargando hojas',
				},
				{
					id: UsageTime.STANDBY,
					name: 'Horas en standby',
				},
				{
					id: UsageTime.BREAKDOWN,
					name: 'Horas en parada',
				},
				{
					id: UsageTime.OFF,
					name: 'Horas apagada',
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
