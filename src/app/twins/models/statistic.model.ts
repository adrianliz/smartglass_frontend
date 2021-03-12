import { Observable } from 'rxjs';

export enum StatisticType {
	MATERIALS_USAGE = 'Materiales procesados',
	PROCESSES_INFO = 'Procesos de máquina',
	BREAKDOWNS = 'Averías'
}

export enum StatisticPeriod {
	ALL = 'ALL',
	THIS_YEAR = 'THIS_YEAR'
}

export enum ChartType {
	DOUGHNUT = 'doughnut'
}

export interface StatisticChart {
	name: StatisticType;
	labels: string[];
	data: number[];
	type: ChartType;
}

export interface StatisticTable {
	name: StatisticType;
	columns: string[];
	dataSource: Observable<object[]>;
}
