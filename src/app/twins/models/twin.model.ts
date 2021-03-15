export enum TwinState {
	IN_STANDBY = 'IN_STANDBY',
	IN_BREAKDOWN = 'IN_BREAKDOWN',
	DOING_PROCESS = 'DOING_PROCESS'
}

export interface Twin {
	name: string;
	series: string;
	model: string;
	state: TwinState;
	img: string;
}
