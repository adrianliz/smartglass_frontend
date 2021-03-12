import { Component, Input, OnInit } from '@angular/core';
import { Ratio, Twin, TwinState } from '../../models/twin.model';
import { TwinsService } from '../../services/twins.service';

@Component({
	selector: 'app-twin-card',
	templateUrl: './twin-card.component.html'
})
export class TwinCardComponent implements OnInit {
	@Input() twin!: Twin;
	ratios: Ratio[] = [];

	constructor(private twinsService: TwinsService) {
	}

	ngOnInit(): void {
		this.twinsService.getRatios(this.twin.name).subscribe(
			res => this.ratios = res // TODO: error handle
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
