import { Pipe, PipeTransform } from '@angular/core';
import { TwinInfoResponse } from '../models/backend-response.model';
import { TwinInfo } from '../models/twin-info';

@Pipe({
	name: 'twinInfo',
})
export class TwinInfoPipe implements PipeTransform {
	transform(twinModel: TwinInfoResponse): TwinInfo {
		return {
			name: twinModel.twinName,
			machineSeries: twinModel.machineSeries,
			machineModel: twinModel.machineModel,
			currentState: twinModel.currentState,
			img: 'assets/img/machine1.png', // TODO: mapping based on model and series
		} as TwinInfo;
	}
}
