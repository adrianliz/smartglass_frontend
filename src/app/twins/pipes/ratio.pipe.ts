import { Pipe, PipeTransform } from '@angular/core';
import { RatioResponse } from '../models/backend-response.model';
import { RATIO_NAMES } from '../models/consts';
import { Ratio } from '../models/ratio.model';

@Pipe({
	name: 'ratio',
})
export class RatioPipe implements PipeTransform {
	transform(ratio: RatioResponse): Ratio {
		return {
			definition: {
				id: ratio.ratio,
				name: RATIO_NAMES.get(ratio.ratio),
			},
			value: ratio.value,
		} as Ratio;
	}
}
