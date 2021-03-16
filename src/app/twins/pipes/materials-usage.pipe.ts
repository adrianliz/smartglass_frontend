import { Pipe, PipeTransform } from '@angular/core';
import { MaterialUsageResponse } from '../models/backend-response.model';
import { Chart, ChartType } from '../models/statistic.model';

@Pipe({
	name: 'materialsUsage'
})
export class MaterialsUsagePipe implements PipeTransform {
	transform(value: MaterialUsageResponse[]): Chart {
		const chart: Chart =
			{
				labels: [],
				data: [],
				type: ChartType.DOUGHNUT
			};

		value.forEach(usage => {
			chart.labels.push({ id: usage.name, name: usage.name });
			chart.data.push(usage.usedTimes);
		});
		return chart;
	}
}
