import { NgModule } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { LoadingComponent } from './components/loading/loading.component';
import { ErrorMessageComponent } from './components/error-message/error-message.component';

@NgModule({
	declarations: [LoadingComponent, ErrorMessageComponent],
	imports: [
		MaterialModule
	],
	exports: [LoadingComponent, ErrorMessageComponent]
})
export class SharedModule {
}
