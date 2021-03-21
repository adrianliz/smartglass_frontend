import { Pipe, PipeTransform } from '@angular/core';
import { ToolsInfoResponse } from '../models/backend-response.model';
import { ImageModel } from '../models/statistic.model';

@Pipe({
	name: 'toolsInfo',
})
export class ToolsInfoPipe implements PipeTransform {
	transform(toolsInfo: ToolsInfoResponse): ImageModel {
		return {
			imageSrc: 'assets/img/tools.png',
			imageAlt: 'tools',
			description: new Map<number, string>([
				[toolsInfo.toolDistanceCovered, 'décimas de milímetro recorridas por la rulina'],
				[toolsInfo.toolAngle, 'milímetros de ángulo de la rulina'],
				[toolsInfo.wheelDiameter, 'milímetros de diámetro de la muela'],
			]),
		} as ImageModel;
	}
}
