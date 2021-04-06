import { Pipe, PipeTransform } from '@angular/core';
import { ToolsResponse } from '../models/backend-response.model';
import { ImageModel } from '../models/statistic.model';

@Pipe({
	name: 'tools',
})
export class ToolsPipe implements PipeTransform {
	transform(tools: ToolsResponse): ImageModel {
		return {
			imageSrc: 'assets/img/tools.png',
			imageAlt: 'tools',
			description: new Map<string, number>([
				['décimas de milímetro recorridas por la rulina', tools.toolDistanceCovered],
				['milímetros de ángulo de la rulina', tools.toolAngle],
				['milímetros de diámetro de la muela', tools.wheelDiameter],
			]),
		} as ImageModel;
	}
}
