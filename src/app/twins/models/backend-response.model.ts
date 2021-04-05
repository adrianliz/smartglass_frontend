import { TwinStateId } from './twin.model';

export interface TwinModelResponse {
	twinName: string;
	machineSeries: string;
	machineModel: string;
	currentState: TwinStateId;
}

export enum RatioId {
	AVAILABILITY = 'AVAILABILITY',
	EFFICIENCY = 'EFFICIENCY',
	EFFECTIVENESS = 'EFFECTIVENESS',
}

export interface RatioResponse {
	ratio: RatioId;
	value: number;
}

export interface MaterialResponse {
	name: string;
	timesUsed: number;
}

export interface OptimizationResponse {
	name: string;
	material: string;
	piecesProcessed: number;
}

export interface ToolsResponse {
	toolDistanceCovered: number;
	toolAngle: number;
	wheelDiameter: number;
}

export enum TimeDistribution {
	PROCESSING_GLASS = 'processingGlassHours',
	LOADING_GLASS = 'loadingGlassHours',
	STANDBY = 'standbyHours',
}

export interface TimeDistributionResponse {
	processingGlassHours: TimeDistribution.PROCESSING_GLASS;
	loadingGlassHours: TimeDistribution.LOADING_GLASS;
	standbyHours: TimeDistribution.STANDBY;
}

export interface ErrorResponse {
	cause: string;
	timesOccurred: number;
}

export enum ErrorMessage {
	TWIN_NOT_FOUND = 'No existe el gemelo',
	TWIN_ERROR = 'No se ha podido recuperar el gemelo',
	TWINS_ERROR = 'No se han podido recuperar los gemelos disponibles',
	RATIOS_ERROR = 'No se han podido recuperar los ratios',
	STATISTIC_ERROR = 'No se ha podido recuperar la estadística',
}
