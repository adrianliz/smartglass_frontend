import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChartName, TableName } from '../../models/statistic.model';

@Component({
	selector: 'app-twin',
	templateUrl: './twin.component.html'
})
export class TwinComponent implements OnInit {
	twinName = '';
	charts: ChartName[] = [];
	tables: TableName[] = [];

	constructor(private activatedRoute: ActivatedRoute) {
	}

	ngOnInit(): void {
		this.activatedRoute.params.subscribe(
			res => this.twinName = res.twinName
		);
		this.charts.push(...Object.values(ChartName));
		this.tables.push(...Object.values(TableName));
	}
}
