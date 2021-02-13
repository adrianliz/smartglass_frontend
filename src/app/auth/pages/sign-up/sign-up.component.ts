import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { matcher } from './matcher.validator';

@Component({
	selector: 'app-sign-up',
	templateUrl: './sign-up.component.html'
})
export class SignUpComponent {
	signUpForm: FormGroup = this.formBuilder.group({
			login: ['', Validators.required],
			email: ['', [Validators.required, Validators.email]],
			password: ['', [Validators.required, Validators.minLength(6)]],
			confirmedPassword: ['', [Validators.required]],
		},
		{
			validators: [matcher('password', 'confirmedPassword')]
		}
	);

	constructor(private formBuilder: FormBuilder, private router: Router) {
	}

	get controls(): { [key: string]: AbstractControl } {
		return this.signUpForm.controls;
	}

	signUp(): void {
		if (! this.signUpForm.valid) {
			return;
		}

		this.router.navigate(['dashboard']); // TODO: backend auth
	}
}
