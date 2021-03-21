import { Component, Input, OnInit } from '@angular/core';
import { ErrorMessage } from '../../models/backend-response.model';
import { Ratio } from '../../models/ratio.model';
import { Twin, TwinStateId } from '../../models/twin.model';
import { TwinService } from '../../services/twin.service';

@Component({
	selector: 'app-twin-card',
	templateUrl: './twin-card.component.html',
})
export class TwinCardComponent implements OnInit {
	@Input() twin!: Twin;
	ratios: Ratio[] = [];
	loading = false;
	error?: ErrorMessage;

	constructor(private twinService: TwinService) {}

	ngOnInit(): void {
		this.loading = true;
		this.twinService.getRatios(this.twin.name).subscribe(
			(res) => {
				this.ratios = res;
				this.loading = false;
			},
			() => {
				this.error = ErrorMessage.RATIOS_ERROR;
				this.loading = false;
			}
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
