import { Pipe, PipeTransform } from '@angular/core';
import { ChartPoint } from 'chart.js';
import { MachineUsageResponse } from '../models/backend-response.model';
import { MACHINE_USAGE_DATASETS } from '../models/consts';
import { DateRange } from '../models/date-range.model';
import { ChartModel } from '../models/statistic.model';
import { SecondsToHoursPipe } from './seconds-to-hours.pipe';

@Pipe({
	name: 'machineUsage',
})
export class MachineUsagePipe implements PipeTransform {
	constructor(private secondsToHours: SecondsToHoursPipe) {}

	transform(machineUsages: [DateRange, MachineUsageResponse][]): ChartModel {
		const chart: ChartModel = {
			labels: [],
			datasets: [
				{ data: [], label: MACHINE_USAGE_DATASETS.WORKING_HOURS, fill: false },
				{ data: [], label: MACHINE_USAGE_DATASETS.ON_HOURS, fill: false },
			],
			type: 'line',
			options: {
				scales: {
					xAxes: [
						{
							type: 'time',
							distribution: 'series',
							time: {
								unit: 'day',
								displayFormats: {
									day: 'DD-MM-YYYY',
								},
								tooltipFormat: 'DD-MM-YYYY',
							},
							ticks: {
								autoSkip: true,
								maxTicksLimit: 10,
							},
						},
					],
					yAxes: [
						{
							ticks: {
								callback(value) {
									return `${value} H`;
								},
							},
						},
					],
				},
			},
			translateDatasets: true,
		};

		const workingPoints: ChartPoint[] = [];
		const onPoints: ChartPoint[] = [];
		machineUsages
			.filter((machineUsage) => machineUsage[1].workingSeconds > 0 || machineUsage[1].onSeconds > 0)
			.forEach((machineUsage) => {
				const workingHours = this.secondsToHours.transform(machineUsage[1].workingSeconds);
				const onHours = this.secondsToHours.transform(machineUsage[1].onSeconds);

				workingPoints.push({
					t: machineUsage[0].endDate.valueOf(),
					y: workingHours,
				});

				onPoints.push({
					t: machineUsage[0].endDate.valueOf(),
					y: onHours,
				});
			});
		chart.datasets[0].data = workingPoints;
		chart.datasets[1].data = onPoints;

		return chart;
	}
}
