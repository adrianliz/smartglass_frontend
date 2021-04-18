import { Pipe, PipeTransform } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ErrorResponse } from '../models/backend-response.model';
import { ERRORS_PRODUCED_COLUMNS } from '../models/consts';
import { TableModel } from '../models/statistic.model';

@Pipe({
	name: 'errors',
})
export class ErrorsPipe implements PipeTransform {
	transform(errors: ErrorResponse[]): TableModel {
		return {
			columns: ERRORS_PRODUCED_COLUMNS,
			dataSource: new MatTableDataSource(errors),
		} as TableModel;
	}
}
