import { Component, OnInit } from '@angular/core';
import { ErrorMessage } from '../../models/backend-response.model';
import { Twin } from '../../models/twin.model';
import { TwinsService } from '../../services/twins.service';

@Component({
	selector: 'app-twins',
	templateUrl: './twins.component.html'
})
export class TwinsComponent implements OnInit {
	twins: Twin[] = [];
	error?: ErrorMessage;
	loading = false;

	constructor(private twinsService: TwinsService) {
	}

	ngOnInit(): void {
		this.loading = true;
		this.twinsService.getTwins().subscribe(
			res => {
				this.twins = res;
				this.loading = false;
			},
			() => {
				this.error = ErrorMessage.TWINS_ERROR;
				this.loading = false;
			}
		);
	}
}
