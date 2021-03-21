import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { MainComponent } from './pages/main/main.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';

@NgModule({
	declarations: [SignUpComponent, LoginComponent, MainComponent],
	imports: [
		CommonModule,
		AuthRoutingModule,
		FormsModule,
		ReactiveFormsModule,
		SharedModule,
		MaterialModule,
		SweetAlert2Module,
	],
})
export class AuthModule {}
