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
	component: Type<any>;
}

export interface ChartModel {
	labels: Label[];
	datasets: ChartDataSets[];
	type: ChartType;
	options: ChartOptions;
	labelsToTranslate?: Label[];
	translateDatasets?: boolean;
}

export interface TableColumn {
	id: string;
	header: string;
}

export interface TableModel {
	columns: TableColumn[];
	dataSource: MatTableDataSource<any>;
}

export interface ImageModel {
	imageSrc: string;
	imageAlt: string;
	description: Map<string, number>;
}
