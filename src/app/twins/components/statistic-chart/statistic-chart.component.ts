import { AfterViewInit, Component, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { TRANSLOCO_SCOPE, TranslocoService } from '@ngneat/transloco';
import { BaseChartDirective, Label } from 'ng2-charts';
import { ChartModel, StatisticComponent } from '../../models/statistic.model';

@Component({
	selector: 'app-statistic-chart',
	templateUrl: './statistic-chart.component.html',
	styles: [],
})
export class StatisticChartComponent implements StatisticComponent, AfterViewInit {
	@Input() model!: ChartModel;

	@ViewChild(BaseChartDirective) chart!: BaseChartDirective;

	constructor(private translocoService: TranslocoService, @Inject(TRANSLOCO_SCOPE) private scope: any) {}

	ngAfterViewInit() {
		this.translateChart();
	}

	translateChart() {
		if (this.model.labelsToTranslate) {
			this.model.labelsToTranslate.forEach((label, index) => {
				this.translocoService.selectTranslate(label, {}, this.scope).subscribe((res) => {
					this.model.labels[index] = res;
				});
			});
		}

		if (this.model.translateDatasets) {
			this.model.datasets.forEach((dataset, index) => {
				if (dataset.label) {
					this.translocoService.selectTranslate(dataset.label, {}, this.scope).subscribe((res) => {
						this.model.datasets[index].label = res;
						this.chart.update(); // due to implementation in ng2-charts
					});
				}
			});
		}
	}
}
