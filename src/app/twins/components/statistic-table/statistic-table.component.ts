import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { StatisticComponent, TableModel } from '../../models/statistic.model';

@Component({
	selector: 'app-statistic-table',
	templateUrl: './statistic-table.component.html',
	styleUrls: ['./statistic-table.component.css'],
})
export class StatisticTableComponent implements StatisticComponent, OnInit {
	@Input() model!: TableModel;

	@ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

	constructor() {}

	ngOnInit() {
		this.model.dataSource.paginator = this.paginator;
	}
}
