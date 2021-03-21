export enum TwinStateId {
	IN_STANDBY = 'IN_STANDBY',
	IN_BREAKDOWN = 'IN_BREAKDOWN',
	OFF = 'OFF',
	DOING_PROCESS = 'DOING_PROCESS',
}

export interface TwinState {
	id: TwinStateId;
	name: string;
}

export interface Twin {
	name: string;
	machineSeries: string;
	machineModel: string;
	currentState: TwinState;
	img: string;
}
