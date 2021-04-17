import { Pipe, PipeTransform } from '@angular/core';
import { ChartPoint } from 'chart.js';
import { MachineUsageResponse } from '../models/backend-response.model';
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
				{ data: [], label: 'Horas trabajando', fill: false },
				{ data: [], label: 'Horas encendida', fill: false },
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
		};

		const workingPoints: ChartPoint[] = [];
		const onPoints: ChartPoint[] = [];
		machineUsages.forEach((machineUsage) => {
			const workingHours = this.secondsToHours.transform(machineUsage[1].workingSeconds);
			const onHours = this.secondsToHours.transform(machineUsage[1].onSeconds);

			if (workingHours > 0) {
				workingPoints.push({
					t: machineUsage[0].endDate.valueOf(),
					y: workingHours,
				});
			}

			if (onHours > 0) {
				onPoints.push({
					t: machineUsage[0].endDate.valueOf(),
					y: onHours,
				});
			}
		});
		chart.datasets[0].data = workingPoints;
		chart.datasets[1].data = onPoints;

		return chart;
	}
}
