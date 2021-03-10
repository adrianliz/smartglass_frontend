import { Component, Input } from '@angular/core';
import { Twin, TwinStatus } from '../../models/twin.model';

@Component({
	selector: 'app-machine-card',
	templateUrl: './twin-card.component.html',
	styleUrls: ['./twin-card.component.css']
})
export class TwinCardComponent {
	@Input() machine!: Twin;

	constructor() {
	}

	public getStatusStyle(status: TwinStatus): object {
		return {
			'bg-success': status === TwinStatus.IN_STANDBY,
			'bg-warning': status === TwinStatus.DOING_PROCESS,
			'bg-danger': status === TwinStatus.IN_BREAKDOWN
		};
	}
}
