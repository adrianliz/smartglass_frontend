import { MatTableDataSource } from '@angular/material/table';

export enum ChartName {
	MATERIALS_USAGE = 'Materiales procesados',
	PROCESSES_INFO = 'Procesos de máquina'
}

export enum TableName {
	BREAKDOWNS = 'Averías'
}

export enum Period {
	ALL = 'ALL',
	THIS_YEAR = 'THIS_YEAR',
	THIS_MONTH = 'THIS_MONTH'
}

export const displayedPeriod = new Map<Period, string>([
	[Period.ALL, 'Desde siempre'],
	[Period.THIS_YEAR, 'Este año'],
	[Period.THIS_MONTH, 'Este mes']
]);

export enum ChartType {
	DOUGHNUT = 'doughnut'
}

export interface Chart {
	name: ChartName;
	labels: string[];
	data: number[];
	type: ChartType;
}

export interface Table {
	name: TableName;
	columns: string[];
	dataSource: MatTableDataSource<any>;
}
