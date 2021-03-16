import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { ErrorMessage } from '../../models/backend-response.model';
import { Chart, ChartId, PeriodId, periods, Table, TableId } from '../../models/statistic.model';
import { TwinsService } from '../../services/twins.service';

@Component({
	selector: 'app-statistic-card',
	templateUrl: './statistic-card.component.html',
	styles: []
})
export class StatisticCardComponent implements OnInit {
	@Input() twinName = '';
	@Input() statisticName = '';
	@Input() chartId?: ChartId;
	@Input() tableId?: TableId;
	chart?: Chart;
	table?: Table;
	periods = periods;
	error?: ErrorMessage;
	loading = false;

	@ViewChild(MatPaginator) paginator!: MatPaginator;

	constructor(private twinsService: TwinsService) {
	}

	private getChart(chartId: ChartId, periodId: PeriodId): void {
		this.loading = true;
		this.twinsService.getStatisticChart(this.twinName, chartId, periodId)?.subscribe(
			res => {
				this.chart = res;
				this.loading = false;
			},
			() => {
				this.error = ErrorMessage.STATISTIC_ERROR;
				this.loading = false;
			}
		);
	}

	private getTable(tableId: TableId, periodId: PeriodId): void {
		this.loading = true;
		this.twinsService.getStatisticTable(this.twinName, tableId, periodId)?.subscribe(
			res => {
				this.table = res;
				this.table.dataSource.paginator = this.paginator;
				this.loading = false;
			},
			() => {
				this.error = ErrorMessage.STATISTIC_ERROR;
				this.loading = false;
			}
		);
	}

	ngOnInit() {
		if (this.chartId) {
			this.getChart(this.chartId, this.periods[0].id);
		} else if (this.tableId) {
			this.getTable(this.tableId, this.periods[0].id);
		}
	}

	updatePeriod(periodId: PeriodId): void {
		if (this.chartId) {
			this.getChart(this.chartId, periodId);
		} else if (this.tableId) {
			this.getTable(this.tableId, periodId);
		}
	}
}
