import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { TranslocoModule } from '@ngneat/transloco';
import { MaterialModule } from '../material/material.module';
import { ChangeLangComponent } from './components/change-lang/change-lang.component';
import { ErrorMessageComponent } from './components/error-message/error-message.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoaderComponent } from './components/loader/loader.component';
import { RefreshComponent } from './components/refresh/refresh.component';
import { UserIconComponent } from './components/user-icon/user-icon.component';

@NgModule({
	declarations: [
		ChangeLangComponent,
		ErrorMessageComponent,
		LoaderComponent,
		RefreshComponent,
		UserIconComponent,
		FooterComponent,
	],
	imports: [CommonModule, MaterialModule, AngularFirestoreModule, TranslocoModule],
	exports: [
		ChangeLangComponent,
		ErrorMessageComponent,
		LoaderComponent,
		RefreshComponent,
		UserIconComponent,
		FooterComponent,
	],
})
export class SharedModule {}
