import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'percentage',
})
export class PercentagePipe implements PipeTransform {
	private readonly FACTOR = 10 ** 2;

	transform(value: number): number {
		return Math.round(value * 100 * this.FACTOR) / this.FACTOR;
	}
}
