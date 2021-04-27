import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { tap } from 'rxjs/operators';
import { StatisticComponent, TableModel } from '../../models/statistic.model';

@Component({
	selector: 'app-statistic-table',
	templateUrl: './statistic-table.component.html',
})
export class StatisticTableComponent implements StatisticComponent, OnInit {
	@Input() model!: TableModel;
	isLargeScreen = false;

	@ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

	constructor(private breakpointObserver: BreakpointObserver) {}

	ngOnInit(): void {
		this.breakpointObserver
			.observe(['(min-width: 600px)'])
			.pipe(tap((result) => (this.isLargeScreen = result.matches)))
			.subscribe((result) => {
				if (result.matches) {
					this.model.dataSource.paginator = this.paginator;
				} else {
					this.model.dataSource.paginator = null;
				}
			});
	}
}
