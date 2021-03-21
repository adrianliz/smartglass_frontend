import { TwinStateId } from './twin.model';

export interface TwinResponse {
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

export interface MaterialUsageResponse {
	name: string;
	timesUsed: number;
}

export enum UsageTime {
	PROCESSING_GLASS = 'processingGlassHours',
	LOADING_GLASS = 'loadingGlassHours',
	STANDBY = 'standbyHours',
	BREAKDOWN = 'breakdownHours',
	OFF = 'offHours',
}

export interface UsageTimeResponse {
	processingGlassHours: UsageTime.PROCESSING_GLASS;
	loadingGlassHours: UsageTime.LOADING_GLASS;
	standbyHours: UsageTime.STANDBY;
	breakdownHours: UsageTime.BREAKDOWN;
	offHours: UsageTime.OFF;
}

export interface OptimizationResponse {
	name: string;
	material: string;
	piecesProcessed: number;
}

export interface ToolsInfoResponse {
	toolDistanceCovered: number;
	toolAngle: number;
	wheelDiameter: number;
}

export interface BreakdownResponse {
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
