import { TwinStateId } from './consts';

export interface TwinState {
	id: TwinStateId;
	name: string;
}

export interface TwinModel {
	name: string;
	machineSeries: string;
	machineModel: string;
	currentState: TwinState;
	img: string;
}
