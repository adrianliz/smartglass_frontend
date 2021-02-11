export enum MachineStatus {
	Active = 'activa',
	Waiting = 'en espera',
	Stopped = 'parada',
	Undefined = 'indefinido'
}

export interface Machine {
	id: number;
	name: string;
	series: string;
	model: string;
	status: MachineStatus;
	img: string;
}
