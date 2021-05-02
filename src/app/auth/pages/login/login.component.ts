import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { AuthService } from '../../services/auth.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
})
export class LoginComponent {
	loginForm: FormGroup = this.formBuilder.group({
		email: ['', [Validators.required, Validators.email]],
		password: ['', [Validators.required]],
	});

	constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService) {}

	get controls(): { [key: string]: AbstractControl } {
		return this.loginForm.controls;
	}

	login() {
		if (!this.loginForm.valid) {
			return;
		}
		const { email, password } = this.loginForm.value;

		this.authService
			.login(email, password)
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
