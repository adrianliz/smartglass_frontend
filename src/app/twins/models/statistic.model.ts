import { Type } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export enum StatisticId {
	MATERIALS_USED = 'MATERIALS_USED',
	OPTIMIZATIONS_PROCESSED = 'OPTIMIZATIONS_PROCESSED',
	TOOLS_INFO = 'TOOLS_INFO',
	TIME_DISTRIBUTION = 'TIME_DISTRIBUTION',
	ERRORS_PRODUCED = 'ERRORS_PRODUCED',
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
	description: Map<string, number>;
}
