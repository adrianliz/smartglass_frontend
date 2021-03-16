import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ErrorMessage } from '../../models/backend-response.model';
import { ChartDefinition, chartDefinitions, TableDefinition, tableDefinitions } from '../../models/statistic.model';
import { TwinsService } from '../../services/twins.service';

@Component({
	selector: 'app-twin',
	templateUrl: './twin.component.html'
})
export class TwinComponent implements OnInit {
	twinName = '';
	chartDefinitions: ChartDefinition[] = [];
	tableDefinitions: TableDefinition[] = [];
	loading = false;
	error?: ErrorMessage;

	constructor(private twinsService: TwinsService, private activatedRoute: ActivatedRoute) {
	}

	ngOnInit(): void {
		this.loading = true;
		this.activatedRoute.params.pipe(
			switchMap(({ twinName }) => this.twinsService.getTwin(twinName))
		).subscribe(
			res => {
				this.twinName = res.name;
				this.chartDefinitions.push(...Object.values(chartDefinitions));
				this.tableDefinitions.push(...Object.values(tableDefinitions));
				this.loading = false;
			},
			err => {
				if (err.status === 404) {
					this.error = ErrorMessage.TWIN_NOT_FOUND;
				} else if (err.status === 0) {
					this.error = ErrorMessage.TWIN_ERROR;
				}
				this.loading = false;
			}
		);
	}
}
