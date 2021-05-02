import { Component } from '@angular/core';
import { name, version } from '../../../../../package.json';

@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
})
export class FooterComponent {
	version = version;
	name = name;

	constructor() {}
}
