import { Pipe, PipeTransform } from '@angular/core';
import { ToolsResponse } from '../models/backend-response.model';
import { TOOLS_INFO_DESCRIPTION } from '../models/consts';
import { ImageModel } from '../models/statistic.model';

@Pipe({
	name: 'tools',
})
export class ToolsPipe implements PipeTransform {
	private readonly FACTOR = 10 ** 2;
	private readonly TENTH_OF_MM_TO_KM = 10000000;

	transform(tools: ToolsResponse): ImageModel {
		return {
			imageSrc: 'assets/img/tools.png',
			imageAlt: 'tools',
			description: new Map<string, number>([
				[
					TOOLS_INFO_DESCRIPTION.TOOL_DISTANCE_KM,
					Math.round((tools.toolDistanceCovered / this.TENTH_OF_MM_TO_KM) * this.FACTOR) / this.FACTOR,
				],
				[TOOLS_INFO_DESCRIPTION.TOOL_ANGLE_MM, tools.toolAngle],
				[TOOLS_INFO_DESCRIPTION.WHEEL_DIAMETER_MM, tools.wheelDiameter],
			]),
		} as ImageModel;
	}
}
