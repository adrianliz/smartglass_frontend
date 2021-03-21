import { Component, Input } from '@angular/core';
import { ImageModel, StatisticComponent } from '../../models/statistic.model';

@Component({
	selector: 'app-statistic-image',
	templateUrl: './statistic-image.component.html',
	styles: [],
})
export class StatisticImageComponent implements StatisticComponent {
	@Input() model!: ImageModel;

	constructor() {}
}
