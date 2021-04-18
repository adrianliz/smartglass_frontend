import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'secondsToHours',
})
export class SecondsToHoursPipe implements PipeTransform {
	private readonly FACTOR = 10 ** 2;
	private readonly SECONDS_IN_HOUR = 3600;

	transform(seconds: number): number {
		return Math.round((seconds / this.SECONDS_IN_HOUR) * this.FACTOR) / this.FACTOR;
	}
}
