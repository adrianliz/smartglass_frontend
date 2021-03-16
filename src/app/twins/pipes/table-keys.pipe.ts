import { Pipe, PipeTransform } from '@angular/core';
import { Table } from '../models/statistic.model';

@Pipe({
	name: 'tableKeys'
})
export class TableKeysPipe implements PipeTransform {
	transform(value: Table): string[] {
		return value.columns.map(column => column.id);
	}
}
