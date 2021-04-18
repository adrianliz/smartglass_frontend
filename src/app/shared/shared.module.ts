import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslocoModule } from '@ngneat/transloco';
import { MaterialModule } from '../material/material.module';
import { ChangeLangComponent } from './components/change-lang/change-lang.component';
import { ErrorMessageComponent } from './components/error-message/error-message.component';
import { LoadingComponent } from './components/loading/loading.component';
import { RefreshComponent } from './components/refresh/refresh.component';

@NgModule({
	declarations: [LoadingComponent, ErrorMessageComponent, RefreshComponent, ChangeLangComponent],
	imports: [CommonModule, MaterialModule, TranslocoModule],
	exports: [LoadingComponent, RefreshComponent, ErrorMessageComponent, ChangeLangComponent],
})
export class SharedModule {}
