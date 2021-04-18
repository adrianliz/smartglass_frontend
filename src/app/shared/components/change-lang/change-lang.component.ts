import { Component, OnInit } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

@Component({
	selector: 'app-change-lang',
	templateUrl: './change-lang.component.html',
	styles: [],
})
export class ChangeLangComponent implements OnInit {
	currentLang = 'es';
	availableLangs: string[] = ['es', 'en'];

	constructor(private translocoService: TranslocoService) {}

	ngOnInit() {
		this.currentLang = this.translocoService.getActiveLang();
		this.availableLangs = this.translocoService.getAvailableLangs() as string[];
	}

	changeLang(lang: string) {
		this.currentLang = lang;
		this.translocoService.setActiveLang(lang);
	}
}
