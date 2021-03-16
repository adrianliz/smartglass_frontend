import { TwinStateId } from './twin.model';

export interface TwinResponse {
	name: string;
	series: string;
	model: string;
	state: TwinStateId;
}

export enum RatioId {
	AVAILABILITY = 'AVAILABILITY',
	EFFICIENCY = 'EFFICIENCY',
	EFFECTIVENESS = 'EFFECTIVENESS'
}

export interface RatioResponse {
	ratio: RatioId;
	value: number;
}

export interface MaterialUsageResponse {
	name: string;
	usedTimes: number;
}

export enum ProcessesInfo {
	PROCESSING_GLASS = 'processingGlassHours',
	LOADING_GLASS = 'loadingGlassHours',
	STANDBY = 'standbyHours'
}

export interface ProcessesInfoResponse {
	processingGlassHours: ProcessesInfo.PROCESSING_GLASS;
	loadingGlassHours: ProcessesInfo.LOADING_GLASS;
	standbyHours: ProcessesInfo.STANDBY;
}

export interface BreakdownResponse {
	errorName: string;
	timesOccurred: number;
}

export enum ErrorMessage {
	TWIN_NOT_FOUND = 'No existe el gemelo',
	TWIN_ERROR = 'No se ha podido recuperar el gemelo',
	TWINS_ERROR = 'No se han podido recuperar los gemelos disponibles',
	RATIOS_ERROR = 'No se han podido recuperar los ratios',
	STATISTIC_ERROR = 'No se ha podido recuperar la estadística'
}
