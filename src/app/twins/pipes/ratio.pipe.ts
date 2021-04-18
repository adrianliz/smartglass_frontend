import { Pipe, PipeTransform } from '@angular/core';
import { RatioResponse } from '../models/backend-response.model';
import { Ratio } from '../models/ratio.model';

@Pipe({
	name: 'ratio',
})
export class RatioPipe implements PipeTransform {
	transform(ratio: RatioResponse): Ratio {
		return {
			id: ratio.ratio,
			value: ratio.value,
		} as Ratio;
	}
}
