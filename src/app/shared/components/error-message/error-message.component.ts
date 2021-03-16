import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-error-message',
	templateUrl: './error-message.component.html',
	styles: []
})
export class ErrorMessageComponent {
	@Input() message = '';

	constructor() {
	}
}
