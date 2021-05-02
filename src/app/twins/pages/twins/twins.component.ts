import { Component, OnInit } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ErrorMessage } from '../../models/consts';
import { TwinInfo } from '../../models/twin-info';
import { TwinsService } from '../../services/twins.service';

@Component({
	selector: 'app-twins',
	templateUrl: './twins.component.html',
})
export class TwinsComponent implements OnInit {
	twinsInfo: Observable<TwinInfo[]> = EMPTY;
	error?: ErrorMessage;

	constructor(private twinsService: TwinsService) {}

	ngOnInit() {
		this.loadTwins();
	}

	loadTwins() {
		this.error = undefined;

		this.twinsInfo = this.twinsService.getTwinsInfo().pipe(
			catchError(() => {
				this.error = ErrorMessage.TWINS_ERROR;
				return EMPTY;
			})
		);
	}
}
