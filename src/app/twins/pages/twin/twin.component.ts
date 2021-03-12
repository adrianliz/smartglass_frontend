import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { StatisticChart, StatisticTable } from '../../models/statistic.model';
import { Twin } from '../../models/twin.model';
import { TwinsService } from '../../services/twins.service';

@Component({
	selector: 'app-twin',
	templateUrl: './twin.component.html'
})
export class TwinComponent implements OnInit, AfterViewInit {
	twin!: Twin;
	charts: Set<StatisticChart> = new Set();
	tables: Set<StatisticTable> = new Set();

	constructor(private twinService: TwinsService, private activatedRoute: ActivatedRoute) {
	}

	ngOnInit(): void {
		let materialsUsage;
		let processesInfo;

		this.activatedRoute.params.subscribe(
			res => {
				materialsUsage = this.twinService.getMaterialsUsage(res.twinName);
				processesInfo = this.twinService.getProcessesInfo(res.twinName);

				forkJoin([materialsUsage, processesInfo]).subscribe(res => {
					res.map(chart => this.charts.add(chart));
				});
			}
		);
	}

	ngAfterViewInit(): void {
		this.activatedRoute.params.pipe(
			switchMap(({ twinName }) => {
				return this.twinService.getBreakdowns(twinName);
			})
		).subscribe(res => {
			this.tables.add(res);
		});
	}
}
