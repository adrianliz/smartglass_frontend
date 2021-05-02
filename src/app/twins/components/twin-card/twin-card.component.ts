import { Component, Input, OnInit } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ErrorMessage } from '../../models/consts';
import { Ratio } from '../../models/ratio.model';
import { TwinInfo, TwinStateId } from '../../models/twin-info';
import { StatisticsService } from '../../services/statistics.service';

@Component({
	selector: 'app-twin-card',
	templateUrl: './twin-card.component.html',
})
export class TwinCardComponent implements OnInit {
	@Input() twinInfo!: TwinInfo;
	ratios: Observable<Ratio[]> = EMPTY;
	error?: ErrorMessage;

	constructor(private twinService: StatisticsService) {}

	ngOnInit() {
		this.ratios = this.twinService.getRatios(this.twinInfo.name).pipe(
			catchError(() => {
				this.error = ErrorMessage.RATIOS_ERROR;
				return EMPTY;
			})
		);
	}

	public getStateStyle(stateId: TwinStateId): object {
		return {
			'bg-warning': stateId === TwinStateId.IN_STANDBY,
			'bg-success': stateId === TwinStateId.DOING_PROCESS,
			'bg-dark': stateId === TwinStateId.IN_BREAKDOWN,
			'bg-danger': stateId === TwinStateId.OFF,
		};
	}
}
