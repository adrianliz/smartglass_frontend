import { TwinState } from './twin.model';

export interface TwinResponse {
	name: string;
	series: string;
	model: string;
	state: TwinState;
}

export enum RatioType {
	AVAILABILITY = 'Disponibilidad',
	EFFICIENCY = 'Eficiencia',
	EFFECTIVENESS = 'Efectividad'
}

export interface RatioResponse {
	ratio: RatioType;
	value: number;
}

export interface MaterialUsageResponse {
	name: string;
	usedTimes: number;
}

export interface ProcessesInfoResponse {
	processingGlassHours: string;
	loadingGlassHours: string;
	standbyHours: string;
}

export interface BreakdownResponse {
	errorName: string;
	timesOccurred: number;
}

export enum ErrorMessage {
	TWINS_ERROR = 'No se han podido recuperar los gemelos disponibles',
	RATIOS_ERROR = 'No se han podido recuperar los ratios',
	STATISTIC_ERROR = 'No se ha podido recuperar la estadística'
}
