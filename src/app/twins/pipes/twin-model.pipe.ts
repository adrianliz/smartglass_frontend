import { Pipe, PipeTransform } from '@angular/core';
import { TwinModelResponse } from '../models/backend-response.model';
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
			currentState: twinModel.currentState,
			img: 'assets/img/machine1.png', // TODO: mapping based on model and series
		} as TwinModel;
	}
}
