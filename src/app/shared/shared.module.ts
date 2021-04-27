import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslocoModule } from '@ngneat/transloco';
import { MaterialModule } from '../material/material.module';
import { ChangeLangComponent } from './components/change-lang/change-lang.component';
import { ErrorMessageComponent } from './components/error-message/error-message.component';
import { LoaderComponent } from './components/loader/loader.component';
import { RefreshComponent } from './components/refresh/refresh.component';

@NgModule({
	declarations: [ChangeLangComponent, ErrorMessageComponent, LoaderComponent, RefreshComponent],
	imports: [CommonModule, MaterialModule, TranslocoModule],
	exports: [ChangeLangComponent, ErrorMessageComponent, LoaderComponent, RefreshComponent],
})
export class SharedModule {}
