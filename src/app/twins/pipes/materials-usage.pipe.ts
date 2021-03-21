import { Pipe, PipeTransform } from '@angular/core';
import { MaterialUsageResponse } from '../models/backend-response.model';
import { ChartModel, ChartType } from '../models/statistic.model';

@Pipe({
	name: 'materialsUsage',
})
export class MaterialsUsagePipe implements PipeTransform {
	transform(value: MaterialUsageResponse[]): ChartModel {
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
