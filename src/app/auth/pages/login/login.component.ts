import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { errorMessages } from '../../models/auth-response.model';
import { ErrorCause } from '../../models/firebase-response.model';
import { AuthService } from '../../services/auth.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html'
})
export class LoginComponent {
	loadingDashboard = false;

	loginForm: FormGroup = this.formBuilder.group({
			email: ['', [Validators.required, Validators.email]],
			password: ['', [Validators.required]]
		}
	);

	constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService) {
	}

	get controls(): { [key: string]: AbstractControl } {
		return this.loginForm.controls;
	}

	login(): void {
		if (! this.loginForm.valid) {
			return;
		}
		const { email, password } = this.loginForm.value;

		this.loadingDashboard = true;
		this.authService.login(email, password).subscribe(
			res => {
				if (res.ok) {
					this.router.navigateByUrl('/dashboard').then(() => this.loadingDashboard = false);
				} else {
					Swal.fire({
						icon: 'error',
						title: 'Oops...',
						text: errorMessages.get(res.error || ErrorCause.UNDEFINED),
					}).then(() => this.loadingDashboard = false);
				}
			}
		);
	}
}
