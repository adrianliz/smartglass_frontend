import { AfterViewInit, ChangeDetectorRef, Component, ComponentFactoryResolver, Input, ViewChild } from '@angular/core';
import { StatisticItemDirective } from '../../directives/statistic-item.directive';
import { ALLOWED_PERIODS, ErrorMessage, PeriodId } from '../../models/consts';
import { Statistic, StatisticComponent } from '../../models/statistic.model';
import { StatisticsService } from '../../services/statistics.service';

@Component({
	selector: 'app-statistic-card',
	templateUrl: './statistic-card.component.html',
})
export class StatisticCardComponent implements AfterViewInit {
	@Input() statistic!: Statistic;
	@Input() twinName!: string;
	periods = ALLOWED_PERIODS;
	loading = false;
	error?: ErrorMessage;

	@ViewChild(StatisticItemDirective, { static: true })
	statisticItem!: StatisticItemDirective;

	constructor(
		private componentFactoryResolver: ComponentFactoryResolver,
		private changeDetectorRef: ChangeDetectorRef,
		private statisticsService: StatisticsService
	) {}

	ngAfterViewInit(): void {
		this.loadStatistic(ALLOWED_PERIODS[0]);
		/* MUST detect changes, because we are updating error and loader parameters in
		 * afterViewInit, where angular DONT check changes
		 */
		this.changeDetectorRef.detectChanges();
	}

	loadStatistic(periodId: PeriodId) {
		if (!this.loading) {
			const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.statistic.component);

			const viewContainerRef = this.statisticItem.viewContainerRef;
			viewContainerRef.clear();

			this.error = undefined;
			this.loading = true;
			this.statisticsService.getStatisticModel(this.twinName, this.statistic.id, periodId)?.subscribe(
				(res) => {
					const componentRef = viewContainerRef.createComponent<StatisticComponent>(componentFactory);
					componentRef.instance.model = res;
					this.loading = false;
				},
				() => {
					this.error = ErrorMessage.STATISTIC_ERROR;
					this.loading = false;
				}
			);
		}
	}
}
