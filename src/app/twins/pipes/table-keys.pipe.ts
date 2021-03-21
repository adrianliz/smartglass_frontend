import { Pipe, PipeTransform } from '@angular/core';
import { TableModel } from '../models/statistic.model';

@Pipe({
	name: 'tableKeys',
})
export class TableKeysPipe implements PipeTransform {
	transform(value: TableModel): string[] {
		return value.columns.map((column) => column.id);
	}
}
