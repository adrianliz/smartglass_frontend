import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { AuthService } from '../../services/auth.service';
import { matcher } from './matcher.validator';

@Component({
	selector: 'app-sign-up',
	templateUrl: './sign-up.component.html',
})
export class SignUpComponent {
	signUpForm: FormGroup = this.formBuilder.group(
		{
			email: ['', [Validators.required, Validators.email]],
			password: ['', [Validators.required, Validators.minLength(6)]],
			confirmedPassword: ['', [Validators.required]],
		},
		{
			validators: [matcher('password', 'confirmedPassword')],
		}
	);

	constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService) {}

	get controls(): { [key: string]: AbstractControl } {
		return this.signUpForm.controls;
	}

	signUp(): void {
		if (!this.signUpForm.valid) {
			return;
		}
		const { email, password } = this.signUpForm.value;

		this.authService
			.signUp(email, password)
			.pipe(take(1))
			.subscribe((res) => {
				if (res.ok) {
					this.router.navigateByUrl('/dashboard');
				} else {
					Swal.fire({
						icon: 'error',
						title: 'Oops...',
						text: res.errorMessage,
					});
				}
			});
	}
}
