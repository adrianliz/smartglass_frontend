import { Component, OnInit } from '@angular/core';
import { LangRetrieverService } from '../../services/lang-retriever.service';

@Component({
	selector: 'app-change-lang',
	templateUrl: './change-lang.component.html',
})
export class ChangeLangComponent implements OnInit {
	currentLang = '';
	availableLangs: string[] = [];

	constructor(private langRetriever: LangRetrieverService) {}

	ngOnInit() {
		this.currentLang = this.langRetriever.activeLang;
		this.availableLangs = this.langRetriever.availableLangs;
	}

	changeLang(lang: string) {
		this.currentLang = this.langRetriever.changeLang(lang);
	}
}
