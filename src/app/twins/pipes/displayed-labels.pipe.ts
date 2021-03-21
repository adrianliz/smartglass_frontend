import { Pipe, PipeTransform } from '@angular/core';
import { ChartModel } from '../models/statistic.model';

@Pipe({
	name: 'displayedLabels',
})
export class DisplayedLabelsPipe implements PipeTransform {
	transform(value: ChartModel): string[] {
		return value.labels.map((label) => label.name);
	}
}
