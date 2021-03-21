import { Type } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export enum StatisticId {
	MATERIALS_USAGE = 'MATERIALS_USAGE',
	USAGE_TIME = 'USAGE_TIME',
	OPTIMIZATIONS = 'OPTIMIZATIONS',
	TOOLS_INFO = 'TOOLS_INFO',
	BREAKDOWNS = 'BREAKDOWNS',
}

export interface Statistic {
	id: StatisticId;
	name: string;
	component: Type<any>;
}

export interface StatisticComponent {
	model: ChartModel | TableModel | ImageModel;
}

export enum ChartType {
	DOUGHNUT = 'doughnut',
}

export interface ChartModel {
	labels: {
		id: string;
		name: string;
	}[];
	data: number[];
	type: ChartType;
}

export interface TableModel {
	columns: {
		id: string;
		header: string;
	}[];
	dataSource: MatTableDataSource<any>;
}

export interface ImageModel {
	imageSrc: string;
	imageAlt: string;
	description: Map<number, string>;
}
