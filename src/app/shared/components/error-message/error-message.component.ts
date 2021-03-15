import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-error-message',
	templateUrl: './error-message.component.html',
	styles: []
})
export class ErrorMessageComponent implements OnInit {
	@Input() message = '';

	constructor() {
	}

	ngOnInit(): void {
	}
}
