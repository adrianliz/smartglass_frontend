import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { StatisticCardComponent } from '../../components/statistic-card/statistic-card.component';
import { ErrorMessage } from '../../models/backend-response.model';
import { periods, statistics } from '../../models/consts';
import { Statistic } from '../../models/statistic.model';
import { TwinsService } from '../../services/twins.service';

@Component({
	selector: 'app-twin',
	templateUrl: './twin.component.html',
})
export class TwinComponent implements OnInit {
	twinName = '';
	statistics: Statistic[] = [];
	loading = false;
	showRefresh = false;
	error?: ErrorMessage;

	@ViewChildren(StatisticCardComponent)
	statisticCards?: QueryList<StatisticCardComponent>;

	constructor(private twinsService: TwinsService, private activatedRoute: ActivatedRoute) {}

	ngOnInit(): void {
		this.loading = true;
		this.activatedRoute.params.pipe(switchMap(({ twinName }) => this.twinsService.getTwin(twinName))).subscribe(
			(res) => {
				this.twinName = res.name;
				this.statistics = statistics;
				this.loading = false;
				this.showRefresh = true;
			},
			(err) => {
				if (err.status === 404) {
					this.error = ErrorMessage.TWIN_NOT_FOUND;
				} else if (err.status === 0) {
					this.error = ErrorMessage.TWIN_ERROR;
				}
				this.loading = false;
			}
		);
	}

	refreshStatistics(): void {
		if (this.statisticCards) {
			this.statisticCards.forEach((statisticCard) => statisticCard.loadStatistic(periods[0].id));
		}
	}
}
