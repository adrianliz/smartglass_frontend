import { Component, Input, OnInit } from '@angular/core';
import { ErrorMessage, RatioResponse } from '../../models/backend-response.model';
import { Twin, TwinState } from '../../models/twin.model';
import { TwinsService } from '../../services/twins.service';

@Component({
	selector: 'app-twin-card',
	templateUrl: './twin-card.component.html'
})
export class TwinCardComponent implements OnInit {
	@Input() twin!: Twin;
	ratios: RatioResponse[] = [];
	error?: ErrorMessage;
	loading = false;

	constructor(private twinsService: TwinsService) {
	}

	ngOnInit(): void {
		this.loading = true;
		this.twinsService.getRatios(this.twin.name).subscribe(
			res => {
				this.ratios = res;
				this.loading = false;
			},
			err => {
				this.error = ErrorMessage.RATIOS_ERROR;
				this.loading = false;
			}
		);
	}

	public getStateStyle(state: TwinState): object {
		return {
			'bg-warning': state === TwinState.IN_STANDBY,
			'bg-success': state === TwinState.DOING_PROCESS,
			'bg-danger': state === TwinState.IN_BREAKDOWN
		};
	}
}
