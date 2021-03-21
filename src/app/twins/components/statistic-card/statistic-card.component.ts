import { AfterViewInit, ChangeDetectorRef, Component, ComponentFactoryResolver, Input, ViewChild } from '@angular/core';
import { StatisticItemDirective } from '../../directives/statistic-item.directive';
import { ErrorMessage } from '../../models/backend-response.model';
import { periods } from '../../models/consts';
import { PeriodId } from '../../models/period.model';
import { Statistic, StatisticComponent } from '../../models/statistic.model';
import { TwinService } from '../../services/twin.service';

@Component({
	selector: 'app-statistic-card',
	templateUrl: './statistic-card.component.html',
})
export class StatisticCardComponent implements AfterViewInit {
	@Input() statistic!: Statistic;
	@Input() twinName!: string;
	periods = periods;
	loading?: boolean;
	error?: ErrorMessage;

	@ViewChild(StatisticItemDirective, { static: false })
	statisticItem!: StatisticItemDirective;

	constructor(
		private componentFactoryResolver: ComponentFactoryResolver,
		private changeDetectorRef: ChangeDetectorRef,
		private twinService: TwinService
	) {}

	ngAfterViewInit(): void {
		this.loadStatistic(periods[0].id);
		/* MUST detect changes, because we are updating error and loading parameters in
		 * afterViewInit, where angular DONT check changes
		 */
		this.changeDetectorRef.detectChanges();
	}

	loadStatistic(periodId: PeriodId) {
		const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.statistic.component);

		const viewContainerRef = this.statisticItem.viewContainerRef;
		viewContainerRef.clear();

		this.error = undefined;
		this.loading = true;
		this.twinService.getStatisticModel(this.twinName, this.statistic.id, periodId)?.subscribe(
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
