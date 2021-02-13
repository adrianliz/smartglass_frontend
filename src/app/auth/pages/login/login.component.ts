import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html'
})
export class LoginComponent {
	loginForm: FormGroup = this.formBuilder.group({
			login: ['', Validators.required],
			password: ['', [Validators.required]]
		}
	);

	constructor(private formBuilder: FormBuilder, private router: Router) {
	}

	get controls(): { [key: string]: AbstractControl } {
		return this.loginForm.controls;
	}

	login(): void {
		if (! this.loginForm.valid) {
			return;
		}

		this.router.navigate(['dashboard']); // TODO: backend auth
	}
}
