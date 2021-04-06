import { Pipe, PipeTransform } from '@angular/core';
import { ChartPoint } from 'chart.js';
import { MachineUsageResponse } from '../models/backend-response.model';
import { ChartModel } from '../models/statistic.model';

@Pipe({
	name: 'machineUsage',
})
export class MachineUsagePipe implements PipeTransform {
	transform(machineUsages: MachineUsageResponse[]): ChartModel {
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
			if (machineUsage.workingHours > 0) {
				workingPoints.push({
					t: machineUsage.timestamp,
					y: machineUsage.workingHours,
				});
			}
			if (machineUsage.onHours > 0) {
				onPoints.push({
					t: machineUsage.timestamp,
					y: machineUsage.onHours,
				});
			}
		});
		chart.datasets[0].data = workingPoints;
		chart.datasets[1].data = onPoints;

		return chart;
	}
}
