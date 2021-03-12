import { Component, OnInit } from '@angular/core';
import { Twin } from '../../models/twin.model';
import { TwinsService } from '../../services/twins.service';

@Component({
	selector: 'app-twins',
	templateUrl: './twins.component.html'
})
export class TwinsComponent implements OnInit {
	twins: Twin[] = [];

	constructor(private twinsService: TwinsService) {
	}

	ngOnInit(): void {
		this.twinsService.getTwins().subscribe(
			res => this.twins = res // TODO: show message if no twin is available
		);
	}
}
