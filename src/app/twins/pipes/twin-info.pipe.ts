import { Pipe, PipeTransform } from '@angular/core';
import { TwinInfoResponse } from '../models/backend-response.model';
import { TwinInfo } from '../models/twin-info';

@Pipe({
	name: 'twinInfo',
})
export class TwinInfoPipe implements PipeTransform {
	transform(twinInfoResponse: TwinInfoResponse): TwinInfo {
		return {
			name: twinInfoResponse.twinName,
			machineSeries: twinInfoResponse.machineSeries,
			machineModel: twinInfoResponse.machineModel,
			currentState: twinInfoResponse.currentState,
			img: `assets/img/${twinInfoResponse.machineModel}.jpg`,
		} as TwinInfo;
	}
}
