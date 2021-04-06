import { Pipe, PipeTransform } from '@angular/core';
import { MaterialResponse } from '../models/backend-response.model';
import { ChartModel } from '../models/statistic.model';

@Pipe({
	name: 'materials',
})
export class MaterialsPipe implements PipeTransform {
	private readonly MAX_MATERIALS = 8;

	transform(materials: MaterialResponse[]): ChartModel {
		const chart: ChartModel = {
			labels: ['Ninguno'],
			datasets: [{ data: [100], backgroundColor: '#F2EEE8' }],
			type: 'doughnut',
			options: {},
		};

		if (materials.length > 0) {
			chart.labels = [];
			chart.datasets = [{ data: [] }];

			materials.slice(0, this.MAX_MATERIALS).forEach((material) => {
				chart.labels.push(material.name);
				chart.datasets[0].data?.push(material.timesUsed);
			});
		}

		return chart;
	}
}
