import { Pipe, PipeTransform } from '@angular/core';
import { TableModel } from '../models/statistic.model';

@Pipe({
	name: 'tableKeys',
})
export class TableKeysPipe implements PipeTransform {
	transform(table: TableModel): string[] {
		return table.columns.map((column) => column.id);
	}
}
