import { Pipe, PipeTransform } from '@angular/core';
import { MaterialResponse } from '../models/backend-response.model';
import { NO_DATA_DATASET, NO_DATA_LABEL } from '../models/consts';
import { ChartModel } from '../models/statistic.model';

@Pipe({
	name: 'materials',
})
export class MaterialsPipe implements PipeTransform {
	private readonly MAX_MATERIALS = 8;

	transform(materials: MaterialResponse[]): ChartModel {
		const chart: ChartModel = {
			labels: [],
			datasets: [{ data: [] }],
			type: 'doughnut',
			options: {},
		};

		if (materials.length > 0) {
			materials.slice(0, this.MAX_MATERIALS).forEach((material) => {
				chart.labels.push(material.name);
				chart.datasets[0].data?.push(material.timesUsed);
			});
		} else {
			chart.labelsToTranslate = [NO_DATA_LABEL];
			chart.datasets[0] = NO_DATA_DATASET;
		}

		return chart;
	}
}
