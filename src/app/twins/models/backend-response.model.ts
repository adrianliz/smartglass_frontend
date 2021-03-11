import { TwinState } from './twin.model';

export interface TwinResponse {
	name: string;
	series: string;
	model: string;
	state: TwinState;
}

export enum RatioType {
	AVAILABILITY = 'AVAILABILITY',
	EFFICIENCY = 'EFFICIENCY',
	EFFECTIVENESS = 'EFFECTIVENESS'
}

export interface RatioResponse {
	ratio: RatioType;
	value: number;
}
