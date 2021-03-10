import { Component, OnInit } from '@angular/core';
import { Twin } from '../../models/twin.model';
import { TwinsService } from '../../services/twins.service';

@Component({
	selector: 'app-dashboard',
	templateUrl: './twins-cards.component.html'
})
export class TwinsCardsComponent implements OnInit {
	machines: Twin[] = [];

	constructor(private service: TwinsService) {
	}

	ngOnInit(): void {
		this.machines = this.service.getAll();
	}
}
