import { NgModule } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { LoadingComponent } from './components/loading/loading.component';

@NgModule({
	declarations: [LoadingComponent],
	imports: [
		MaterialModule
	],
	exports: [LoadingComponent]
})
export class SharedModule {
}
