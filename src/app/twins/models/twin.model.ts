export enum TwinStateId {
	IN_STANDBY = 'IN_STANDBY',
	IN_BREAKDOWN = 'IN_BREAKDOWN',
	DOING_PROCESS = 'DOING_PROCESS'
}

export interface TwinState {
	id: TwinStateId;
	name: string;
}

export const stateNames = new Map<TwinStateId, string>([
	[TwinStateId.IN_STANDBY, 'En standby'],
	[TwinStateId.IN_BREAKDOWN, 'Parada'],
	[TwinStateId.DOING_PROCESS, 'Realizando un proceso']
]);

export interface Twin {
	name: string;
	series: string;
	model: string;
	state: TwinState;
	img: string;
}
