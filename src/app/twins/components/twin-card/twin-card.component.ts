import { Component, Input, OnInit } from '@angular/core';
import { Ratio, Twin, TwinState } from '../../models/twin.model';
import { TwinsService } from '../../services/twins.service';

@Component({
	selector: 'app-machine-card',
	templateUrl: './twin-card.component.html',
	styleUrls: ['./twin-card.component.css']
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

	public getStatusStyle(status: TwinState): object {
		return {
			'bg-warning': status === TwinState.IN_STANDBY,
			'bg-success': status === TwinState.DOING_PROCESS,
			'bg-danger': status === TwinState.IN_BREAKDOWN
		};
	}
}
