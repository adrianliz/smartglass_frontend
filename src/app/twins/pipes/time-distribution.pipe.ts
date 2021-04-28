import { Pipe, PipeTransform } from '@angular/core';
import { TimeDistributionResponse } from '../models/backend-response.model';
import { NO_DATA_DATASET, NO_DATA_LABEL, TIME_DISTRIBUTION_LABELS } from '../models/consts';
import { ChartModel } from '../models/statistic.model';
import { SecondsToHoursPipe } from './seconds-to-hours.pipe';

@Pipe({
	name: 'timeDistributionPipe',
})
export class TimeDistributionPipe implements PipeTransform {
	constructor(private secondsToHours: SecondsToHoursPipe) {}

	transform(timeDistribution: TimeDistributionResponse): ChartModel {
		const chart: ChartModel = {
			labels: [],
			datasets: [{ data: [] }],
			type: 'doughnut',
			options: {},
			labelsToTranslate: TIME_DISTRIBUTION_LABELS,
		};

		Object.values(timeDistribution).forEach((seconds) => {
			if (seconds !== 0) {
				chart.datasets[0].data?.push(this.secondsToHours.transform(seconds));
			}
		});

		if (chart.datasets[0].data?.length === 0) {
			chart.labelsToTranslate = [NO_DATA_LABEL];
			chart.datasets[0] = NO_DATA_DATASET;
		}

		return chart;
	}
}
