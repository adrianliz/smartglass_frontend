import { Pipe, PipeTransform } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { OptimizationResponse } from '../models/backend-response.model';
import { OPTIMIZATIONS_PROCESSED_COLUMNS } from '../models/consts';
import { TableModel } from '../models/statistic.model';

@Pipe({
	name: 'optimizations',
})
export class OptimizationsPipe implements PipeTransform {
	transform(optimizations: OptimizationResponse[]): TableModel {
		return {
			columns: OPTIMIZATIONS_PROCESSED_COLUMNS,
			dataSource: new MatTableDataSource(optimizations),
		} as TableModel;
	}
}
