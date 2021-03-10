export enum TwinStatus {
	IN_STANDBY = 'activa',
	IN_BREAKDOWN = 'parada',
	DOING_PROCESS = 'en espera'
}

export interface Twin {
	id: number;
	name: string;
	series: string;
	model: string;
	status: TwinStatus;
	img: string;
}
