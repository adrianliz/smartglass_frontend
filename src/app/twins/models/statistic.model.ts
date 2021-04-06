import { Type } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import { StatisticId } from './consts';

export interface StatisticComponent {
	model: ChartModel | TableModel | ImageModel;
}

export interface Statistic {
	id: StatisticId;
	name: string;
	component: Type<any>;
}

export interface ChartModel {
	labels: Label[];
	datasets: ChartDataSets[];
	type: ChartType;
	options: ChartOptions;
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
