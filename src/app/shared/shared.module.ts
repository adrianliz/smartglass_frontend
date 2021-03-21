import { NgModule } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { ErrorMessageComponent } from './components/error-message/error-message.component';
import { LoadingComponent } from './components/loading/loading.component';
import { RefreshComponent } from './components/refresh/refresh.component';

@NgModule({
	declarations: [LoadingComponent, ErrorMessageComponent, RefreshComponent],
	imports: [MaterialModule],
	exports: [LoadingComponent, RefreshComponent, ErrorMessageComponent],
})
export class SharedModule {}
