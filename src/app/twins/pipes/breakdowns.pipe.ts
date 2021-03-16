import { Pipe, PipeTransform } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { BreakdownResponse } from '../models/backend-response.model';
import { Table } from '../models/statistic.model';

@Pipe({
	name: 'breakdowns'
})
export class BreakdownsPipe implements PipeTransform {
	transform(value: BreakdownResponse[]): Table {
		return {
			columns: [{ id: 'errorName', header: 'Nombre' }, { id: 'timesOccurred', header: 'Veces' }],
			dataSource: new MatTableDataSource(value)
		} as Table;
	}
}
