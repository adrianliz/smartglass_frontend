import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { StatisticCardComponent } from '../../components/statistic-card/statistic-card.component';
import { ALLOWED_PERIODS, ALLOWED_STATISTICS, ErrorMessage } from '../../models/consts';
import { Statistic } from '../../models/statistic.model';
import { TwinsService } from '../../services/twins.service';

@Component({
	selector: 'app-twin',
	templateUrl: './twin.component.html',
})
export class TwinComponent implements OnInit {
	twinName = '';
	statistics: Statistic[] = [];
	showRefresh = false;
	error?: ErrorMessage;

	@ViewChildren(StatisticCardComponent)
	statisticCards?: QueryList<StatisticCardComponent>;

	constructor(private twinsService: TwinsService, private activatedRoute: ActivatedRoute) {}

	ngOnInit() {
		this.activatedRoute.params.pipe(switchMap(({ twinName }) => this.twinsService.getTwinInfo(twinName))).subscribe(
			(res) => {
				this.twinName = res.name;
				this.statistics = ALLOWED_STATISTICS;
				this.showRefresh = true;
			},
			(err) => {
				if (err.status === 404) {
					this.error = ErrorMessage.TWIN_NOT_FOUND;
				} else {
					this.error = ErrorMessage.TWIN_ERROR;
				}
			}
		);
	}

	refreshStatistics() {
		if (this.statisticCards) {
			this.statisticCards.forEach((statisticCard) => statisticCard.loadStatistic(ALLOWED_PERIODS[0]));
		}
	}
}
