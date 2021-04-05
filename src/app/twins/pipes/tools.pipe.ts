import { Pipe, PipeTransform } from '@angular/core';
import { ToolsResponse } from '../models/backend-response.model';
import { ImageModel } from '../models/statistic.model';

@Pipe({
	name: 'tools',
})
export class ToolsPipe implements PipeTransform {
	transform(toolsInfo: ToolsResponse): ImageModel {
		return {
			imageSrc: 'assets/img/tools.png',
			imageAlt: 'tools',
			description: new Map<string, number>([
				['décimas de milímetro recorridas por la rulina', toolsInfo.toolDistanceCovered],
				['milímetros de ángulo de la rulina', toolsInfo.toolAngle],
				['milímetros de diámetro de la muela', toolsInfo.wheelDiameter],
			]),
		} as ImageModel;
	}
}
