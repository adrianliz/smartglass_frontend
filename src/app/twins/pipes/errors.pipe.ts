import { Pipe, PipeTransform } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ErrorResponse } from '../models/backend-response.model';
import { TableModel } from '../models/statistic.model';

@Pipe({
	name: 'errors',
})
export class ErrorsPipe implements PipeTransform {
	transform(errors: ErrorResponse[]): TableModel {
		return {
			columns: [
				{ id: 'cause', header: 'Causa' },
				{ id: 'timesOccurred', header: 'Veces que ha ocurrido' },
			],
			dataSource: new MatTableDataSource(errors),
		} as TableModel;
	}
}