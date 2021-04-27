import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable, NgModule } from '@angular/core';
import {
	Translation,
	TRANSLOCO_CONFIG,
	TRANSLOCO_LOADER,
	translocoConfig,
	TranslocoLoader,
	TranslocoModule,
} from '@ngneat/transloco';
import { environment } from '../../environments/environment';

@Injectable()
export class TranslocoHttpLoader implements TranslocoLoader {
	constructor(private handler: HttpBackend) {}

	getTranslation(lang: string) {
		const http = new HttpClient(this.handler);
		return http.get<Translation>(`./assets/i18n/${lang}.json`);
	}
}

@NgModule({
	exports: [TranslocoModule],
	providers: [
		{
			provide: TRANSLOCO_CONFIG,
			useValue: translocoConfig({
				availableLangs: ['en', 'es'],
				defaultLang: 'es',
				fallbackLang: 'es',
				reRenderOnLangChange: true,
				prodMode: environment.production,
			}),
		},
		{ provide: TRANSLOCO_LOADER, useClass: TranslocoHttpLoader },
	],
})
export class TranslocoRootModule {}
