import { Pipe, PipeTransform } from '@angular/core';
import { RatioResponse } from '../models/backend-response.model';
import { Ratio, ratioNames } from '../models/statistic.model';

@Pipe({
	name: 'ratio'
})
export class RatioPipe implements PipeTransform {
	transform(value: RatioResponse): Ratio {
		return {
			definition: {
				id: value.ratio,
				name: ratioNames.get(value.ratio)
			},
			value: value.value
		} as Ratio;
	}
}
