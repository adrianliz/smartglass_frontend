import { MatTableDataSource } from '@angular/material/table';
import { RatioId } from './backend-response.model';

export interface Ratio {
	definition: {
		id: RatioId,
		name: string
	};
	value: number;
}

export const ratioNames = new Map<RatioId, string>([
	[RatioId.AVAILABILITY, 'Disponibilidad'],
	[RatioId.EFFICIENCY, 'Eficiencia'],
	[RatioId.EFFECTIVENESS, 'Efectividad']
]);

export enum PeriodId {
	ALL = 'ALL',
	THIS_YEAR = 'THIS_YEAR',
	THIS_MONTH = 'THIS_MONTH'
}

export interface Period {
	id: PeriodId;
	name: string;
}

export const periods: Period[] = [
	{ id: PeriodId.ALL, name: 'Desde siempre' },
	{ id: PeriodId.THIS_YEAR, name: 'Este año' },
	{ id: PeriodId.THIS_MONTH, name: 'Este mes' }
];

export enum ChartId {
	MATERIALS_USAGE = 'MATERIALS_USAGE',
	PROCESSES_INFO = 'PROCESSES_INFO'
}

export interface ChartDefinition {
	id: ChartId;
	name: string;
}

export const chartDefinitions: ChartDefinition[] = [
	{
		id: ChartId.MATERIALS_USAGE,
		name: 'Materiales procesados'
	},
	{
		id: ChartId.PROCESSES_INFO,
		name: 'Procesos realizados'
	}
];

export enum TableId {
	BREAKDOWNS = 'BREAKDOWNS'
}

export interface TableDefinition {
	id: TableId;
	name: string;
}

export const tableDefinitions: TableDefinition[] = [
	{
		id: TableId.BREAKDOWNS,
		name: 'Averías producidas'
	}
];

export enum ChartType {
	DOUGHNUT = 'doughnut'
}

export interface Chart {
	labels: {
		id: string,
		name: string
	}[];
	data: number[];
	type: ChartType;
}

export interface Table {
	columns: {
		id: string,
		header: string
	}[];
	dataSource: MatTableDataSource<any>;
}
