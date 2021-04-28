export const enum TwinStateId {
	IN_STANDBY = 'IN_STANDBY',
	IN_BREAKDOWN = 'IN_BREAKDOWN',
	OFF = 'OFF',
	DOING_PROCESS = 'DOING_PROCESS',
}

export interface TwinInfo {
	name: string;
	machineSeries: string;
	machineModel: string;
	currentState: TwinStateId;
	img: string;
}
