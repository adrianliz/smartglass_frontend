import { Pipe, PipeTransform } from '@angular/core';
import { DateRange } from '../models/date-range.model';

@Pipe({
	name: 'daysSplitter',
})
export class DaysSplitterPipe implements PipeTransform {
	transform(dateRange: DateRange): DateRange[] {
		const startDate = dateRange.startDate;
		const endDate = dateRange.endDate;
		const days = endDate.diff(startDate, 'days');

		return [...Array(days + 1).keys()].map((i) => {
			return {
				startDate: startDate.add(i, 'days').startOf('day'),
				endDate: startDate.add(i, 'days').endOf('day'),
			};
		});
	}
}
