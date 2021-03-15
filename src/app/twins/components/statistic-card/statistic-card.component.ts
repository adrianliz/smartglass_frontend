import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { ErrorMessage } from '../../models/backend-response.model';
import { Chart, ChartName, displayedPeriod, Period, Table, TableName } from '../../models/statistic.model';
import { TwinsService } from '../../services/twins.service';

@Component({
	selector: 'app-statistic-card',
	templateUrl: './statistic-card.component.html',
	styles: []
})
export class StatisticCardComponent implements OnInit {
	@Input() twinName = '';
	@Input() chartName?: ChartName;
	@Input() tableName?: TableName;
	chart?: Chart;
	table?: Table;
	defaultPeriod = displayedPeriod.entries().next().value;
	periodOptions = displayedPeriod;
	error?: ErrorMessage;
	loading = false;

	@ViewChild(MatPaginator) paginator!: MatPaginator;

	constructor(private twinsService: TwinsService) {
	}

	private getChart(chartName: ChartName, period: Period): void {
		this.loading = true;
		this.twinsService.getStatisticChart(this.twinName, chartName, period)?.subscribe(
			res => {
				this.chart = res;
				this.loading = false;
			},
			err => {
				this.error = ErrorMessage.STATISTIC_ERROR;
				this.loading = false;
			}
		);
	}

	private getTable(tableName: TableName, period: Period): void {
		this.loading = true;
		this.twinsService.getStatisticTable(this.twinName, tableName, period)?.subscribe(
			res => {
				this.table = res;
				this.table.dataSource.paginator = this.paginator;
				this.loading = false;
			},
			err => {
				this.error = ErrorMessage.STATISTIC_ERROR;
				this.loading = false;
			}
		);
	}

	ngOnInit() {
		if (this.chartName) {
			this.getChart(this.chartName, this.defaultPeriod[0]);
		} else if (this.tableName) {
			this.getTable(this.tableName, this.defaultPeriod[0]);
		}
	}

	updatePeriod(period: Period): void {
		if (this.chartName) {
			this.getChart(this.chartName, period);
		} else if (this.tableName) {
			this.getTable(this.tableName, period);
		}
	}
}
