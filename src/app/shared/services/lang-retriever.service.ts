import { Injectable } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

@Injectable({
	providedIn: 'root',
})
export class LangRetrieverService {
	static readonly ID_LANG = 'idLang';

	private _availableLangs = this.translocoService.getAvailableLangs() as string[];
	private _activeLang = '';

	constructor(private translocoService: TranslocoService) {
		this.retrieveLang();
	}

	private retrieveLang(): void {
		const langSaved = localStorage.getItem(LangRetrieverService.ID_LANG);
		if (!langSaved) {
			this._activeLang = this.translocoService.getDefaultLang();
		} else {
			this._activeLang = langSaved;
			this.translocoService.setActiveLang(this._activeLang);
		}
	}

	public get activeLang(): string {
		return this._activeLang;
	}

	public get availableLangs(): string[] {
		return this._availableLangs;
	}

	public changeLang(lang: string): string {
		if (this.availableLangs.indexOf(lang) >= 0) {
			this.translocoService.setActiveLang(lang);
			localStorage.setItem(LangRetrieverService.ID_LANG, lang);
			this._activeLang = lang;
		}

		return this._activeLang;
	}
}
