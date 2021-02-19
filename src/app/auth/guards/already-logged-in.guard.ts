import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
	providedIn: 'root'
})
export class AlreadyLoggedInGuard implements CanActivate, CanLoad {
	constructor(private router: Router) {
	}

	private alreadyLoggedIn() {
		if (localStorage.getItem(AuthService.ID_TOKEN) !== null) {
			this.router.navigateByUrl('/dashboard');
			return true;
		}

		return false;
	}

	canActivate(): boolean {
		return ! this.alreadyLoggedIn();
	}

	canLoad(): boolean {
		return ! this.alreadyLoggedIn();
	}
}
