import { Pipe, PipeTransform } from '@angular/core';
import { TwinResponse } from '../models/backend-response.model';
import { stateNames, Twin } from '../models/twin.model';

@Pipe({
	name: 'twin'
})
export class TwinPipe implements PipeTransform {
	transform(value: TwinResponse): Twin {
		return {
			name: value.name,
			series: value.series,
			model: value.model,
			state: {
				id: value.state,
				name: stateNames.get(value.state)
			},
			img: 'assets/img/machine1.png' // TODO: mapping based on model
		} as Twin;
	}
}
