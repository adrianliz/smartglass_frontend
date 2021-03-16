import { Pipe, PipeTransform } from '@angular/core';
import { ProcessesInfo, ProcessesInfoResponse } from '../models/backend-response.model';
import { Chart, ChartType } from '../models/statistic.model';

@Pipe({
	name: 'processesInfo'
})
export class ProcessesInfoPipe implements PipeTransform {
	transform(value: ProcessesInfoResponse): Chart {
		const chart: Chart =
			{
				labels: [
					{
						id: ProcessesInfo.PROCESSING_GLASS,
						name: 'Horas procesando hojas'
					},
					{
						id: ProcessesInfo.LOADING_GLASS,
						name: 'Horas cargando hojas'
					},
					{
						id: ProcessesInfo.STANDBY,
						name: 'Horas en standby'
					}
				],
				data: [],
				type: ChartType.DOUGHNUT
			};

		Object.values(value).forEach(hours => {
			if (hours > 0) {
				chart.data.push(hours);
			}
		});

		return chart;
	}
}
