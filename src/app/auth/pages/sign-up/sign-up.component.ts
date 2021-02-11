import { Component } from '@angular/core';
import { AbstractControl, AbstractControlOptions, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { matcher } from './matcher.validator';

@Component({
	selector: 'app-sign-up',
	templateUrl: './sign-up.component.html'
})
export class SignUpComponent {
	signUpForm: FormGroup = this.formBuilder.group({
			username: [null, Validators.required],
			email: [null, [Validators.required, Validators.email]],
			password: ['', [Validators.required, Validators.minLength(6)]],
			confirmedPassword: ['', [Validators.required]],
		},
		{
			validator: matcher('password', 'confirmedPassword')
		} as AbstractControlOptions
	);

	constructor(private formBuilder: FormBuilder, private router: Router) {
	}

	get fields(): { [key: string]: AbstractControl } {
		return this.signUpForm.controls;
	}

	signUp(): void {
		if (! this.signUpForm.valid) {
			return;
		}

		this.router.navigate(['dashboard']); // TODO: backend auth
	}
}
