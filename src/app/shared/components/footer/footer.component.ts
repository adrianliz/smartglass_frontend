import { Component } from '@angular/core';
import pkgInfo from '../../../../../package.json';

@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
})
export class FooterComponent {
	version = pkgInfo.version;
	name = pkgInfo.name;

	constructor() {}
}
