import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TranslocoRootModule } from './transloco/transloco-root.module';

@NgModule({
	declarations: [AppComponent],
	imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, HttpClientModule, TranslocoRootModule],
	bootstrap: [AppComponent],
})
export class AppModule {}
