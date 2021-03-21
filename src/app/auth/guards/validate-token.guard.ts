import { Injectable } from '@angular/core';
import { CanActivate, CanLoad } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
	providedIn: 'root',
})
export class ValidateTokenGuard implements CanActivate, CanLoad {
	constructor(private authService: AuthService) {}

	private validateToken() {
		return this.authService.validateToken();
	}

	canActivate(): Observable<boolean> {
		return this.validateToken();
	}

	canLoad(): Observable<boolean> {
		return this.validateToken();
	}
}
