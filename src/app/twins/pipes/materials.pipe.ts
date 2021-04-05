import { Pipe, PipeTransform } from '@angular/core';
import { MaterialResponse } from '../models/backend-response.model';
import { ChartModel } from '../models/statistic.model';

@Pipe({
	name: 'materials',
})
export class MaterialsPipe implements PipeTransform {
	transform(materials: MaterialResponse[]): ChartModel {
		const chart: ChartModel = {
			labels: [],
			datasets: [{ data: [] }],
			type: 'doughnut',
			options: {},
		};

		materials.forEach((material) => {
			chart.labels.push(material.name);
			chart.datasets[0].data?.push(material.timesUsed);
		});
		return chart;
	}
}
