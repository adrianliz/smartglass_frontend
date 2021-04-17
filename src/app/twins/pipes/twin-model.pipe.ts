import { Pipe, PipeTransform } from '@angular/core';
import { TwinModelResponse } from '../models/backend-response.model';
import { STATE_NAMES } from '../models/consts';
import { TwinModel } from '../models/twin.model';

@Pipe({
	name: 'twinModel',
})
export class TwinModelPipe implements PipeTransform {
	transform(twinModel: TwinModelResponse): TwinModel {
		return {
			name: twinModel.twinName,
			machineSeries: twinModel.machineSeries,
			machineModel: twinModel.machineModel,
			currentState: {
				id: twinModel.currentState,
				name: STATE_NAMES.get(twinModel.currentState),
			},
			img: 'assets/img/machine1.png', // TODO: mapping based on model and series
		} as TwinModel;
	}
}
