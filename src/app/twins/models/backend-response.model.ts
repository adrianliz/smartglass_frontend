import { RatioId, TwinStateId } from './consts';

export interface TwinModelResponse {
	twinName: string;
	machineSeries: string;
	machineModel: string;
	currentState: TwinStateId;
}

export interface RatioResponse {
	ratio: RatioId;
	value: number;
}

export interface MaterialResponse {
	name: string;
	timesUsed: number;
}

export interface MachineUsageResponse {
	timestamp: number;
	workingHours: number;
	onHours: number;
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

export interface TimeDistributionResponse {
	processingGlassHours: number;
	loadingGlassHours: number;
	standbyHours: number;
}

export interface ErrorResponse {
	cause: string;
	timesOccurred: number;
}
