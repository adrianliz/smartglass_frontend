import { Pipe, PipeTransform } from '@angular/core';
import { Chart } from '../models/statistic.model';

@Pipe({
	name: 'displayedLabels'
})
export class DisplayedLabelsPipe implements PipeTransform {
	transform(value: Chart): string[] {
		return value.labels.map(label => label.name);
	}
}
