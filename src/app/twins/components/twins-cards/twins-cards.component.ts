import { Component, OnInit } from '@angular/core';
import { Twin } from '../../models/twin.model';
import { TwinsService } from '../../services/twins.service';

@Component({
	selector: 'app-dashboard',
	templateUrl: './twins-cards.component.html'
})
export class TwinsCardsComponent implements OnInit {
	twins: Twin[] = [];

	constructor(private twinsService: TwinsService) {
	}

	ngOnInit(): void {
		this.twinsService.getAll().subscribe(
			res => this.twins = res // TODO: show message if not twin is available
		);
	}
}
