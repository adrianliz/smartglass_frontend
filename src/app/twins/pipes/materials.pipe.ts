import { Pipe, PipeTransform } from '@angular/core';
import { MaterialResponse } from '../models/backend-response.model';
import { ChartModel, ChartType } from '../models/statistic.model';

@Pipe({
	name: 'materials',
})
export class MaterialsPipe implements PipeTransform {
	transform(value: MaterialResponse[]): ChartModel {
		const chart: ChartModel = {
			labels: [],
			data: [],
			type: ChartType.DOUGHNUT,
		};

		value.forEach((material) => {
			chart.labels.push({ id: material.name, name: material.name });
			chart.data.push(material.timesUsed);
		});
		return chart;
	}
}
