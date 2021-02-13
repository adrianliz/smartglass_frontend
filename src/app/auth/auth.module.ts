import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { AuthRoutingModule } from './auth-routing.module';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { LoginComponent } from './pages/login/login.component';
import { MainComponent } from './pages/main/main.component';

@NgModule({
	declarations: [SignUpComponent, LoginComponent, MainComponent],
	imports: [
		CommonModule,
		AuthRoutingModule,
		FormsModule,
		ReactiveFormsModule,
		MaterialModule
	]
})
export class AuthModule {
}
