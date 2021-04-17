import { Pipe, PipeTransform } from '@angular/core';
import { ToolsResponse } from '../models/backend-response.model';
import { ImageModel } from '../models/statistic.model';

@Pipe({
	name: 'tools',
})
export class ToolsPipe implements PipeTransform {
	private readonly FACTOR = 10 ** 2;
	private readonly TENTH_OF_MM_IN_KM = 10000000;

	transform(tools: ToolsResponse): ImageModel {
		return {
			imageSrc: 'assets/img/tools.png',
			imageAlt: 'tools',
			description: new Map<string, number>([
				[
					'kilómetros recorridos por la rulina',
					Math.round((tools.toolDistanceCovered / this.TENTH_OF_MM_IN_KM) * this.FACTOR) / this.FACTOR,
				],
				['milímetros de ángulo de la rulina', tools.toolAngle],
				['milímetros de diámetro de la muela', tools.wheelDiameter],
			]),
		} as ImageModel;
	}
}
