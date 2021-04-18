import { TwinStateId } from './twin.model';

export interface TwinModelResponse {
	twinName: string;
	machineSeries: string;
	machineModel: string;
	currentState: TwinStateId;
}

export interface RatioResponse {
	ratio: string;
	value: number;
}

export interface MaterialResponse {
	name: string;
	timesUsed: number;
}

export interface MachineUsageResponse {
	workingSeconds: number;
	onSeconds: number;
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
	processingGlassSeconds: number;
	loadingGlassSeconds: number;
	standbySeconds: number;
}

export interface ErrorResponse {
	cause: string;
	timesOccurred: number;
}
