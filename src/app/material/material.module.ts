import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
	exports: [
		MatButtonModule,
		MatCardModule,
		MatExpansionModule,
		MatIconModule,
		MatListModule,
		MatSidenavModule,
		MatToolbarModule
	]
})
export class MaterialModule {
}
