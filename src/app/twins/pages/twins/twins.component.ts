import { Component, OnInit } from '@angular/core';
import { ErrorMessage } from '../../models/consts';
import { TwinModel } from '../../models/twin.model';
import { TwinsService } from '../../services/twins.service';

@Component({
	selector: 'app-twins',
	templateUrl: './twins.component.html',
})
export class TwinsComponent implements OnInit {
	twinsModels: TwinModel[] = [];
	loading = false;
	error?: ErrorMessage;

	constructor(private twinsService: TwinsService) {}

	ngOnInit(): void {
		this.loadTwins();
	}

	loadTwins() {
		this.error = undefined;
		this.loading = true;
		this.twinsModels = [];
		this.twinsService.getTwinsModels().subscribe(
			(res) => {
				this.twinsModels = res;
				this.loading = false;
			},
			() => {
				this.error = ErrorMessage.TWINS_ERROR;
				this.loading = false;
			}
		);
	}
}
