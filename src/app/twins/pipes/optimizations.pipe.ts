import { Pipe, PipeTransform } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { OptimizationResponse } from '../models/backend-response.model';
import { TableModel } from '../models/statistic.model';

@Pipe({
	name: 'optimizations',
})
export class OptimizationsPipe implements PipeTransform {
	transform(value: OptimizationResponse[]): TableModel {
		return {
			columns: [
				{ id: 'name', header: 'Nombre' },
				{ id: 'material', header: 'Material' },
				{ id: 'piecesProcessed', header: 'Piezas procesadas' },
			],
			dataSource: new MatTableDataSource(value),
		} as TableModel;
	}
}
