import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { AfterViewInit, Component, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { TRANSLOCO_SCOPE, TranslocoService } from '@ngneat/transloco';
import { BaseChartDirective } from 'ng2-charts';

import { EMPTY, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { ChartModel, StatisticComponent } from '../../models/statistic.model';

@Component({
	selector: 'app-statistic-chart',
	templateUrl: './statistic-chart.component.html',
})
export class StatisticChartComponent implements StatisticComponent, OnInit, AfterViewInit {
	@Input() model!: ChartModel;
	isLargeScreen: Observable<boolean> = EMPTY;

	@ViewChild(BaseChartDirective) chart!: BaseChartDirective;

	constructor(
		private translocoService: TranslocoService,
		private breakpointObserver: BreakpointObserver,
		@Inject(TRANSLOCO_SCOPE) private scope: any
	) {}

	ngOnInit() {
		this.isLargeScreen = this.breakpointObserver.observe(['(min-width: 576px)']).pipe(
			tap((res) => {
				const options = { ...this.model.options };
				const xAxes = options.scales?.xAxes;
				if (xAxes && xAxes[0]) {
					xAxes[0].display = res.matches;
					this.model.options = options;
				}
			}),
			map<BreakpointState, boolean>((res) => res.matches)
		);
	}

	ngAfterViewInit() {
		this.translateChart();
		this.chart.chart.update();
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
