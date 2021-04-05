import { Pipe, PipeTransform } from '@angular/core';
import { TwinModelResponse } from '../models/backend-response.model';
import { stateNames } from '../models/consts';
import { TwinModel } from '../models/twin.model';

@Pipe({
	name: 'twin',
})
export class TwinPipe implements PipeTransform {
	transform(value: TwinModelResponse): TwinModel {
		return {
			name: value.twinName,
			machineSeries: value.machineSeries,
			machineModel: value.machineModel,
			currentState: {
				id: value.currentState,
				name: stateNames.get(value.currentState),
			},
			img: 'assets/img/machine1.png', // TODO: mapping based on model and series
		} as TwinModel;
	}
}
