import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TranslocoService } from '@ngneat/transloco';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { AuthResponse } from '../models/auth-response.model';
import { ErrorResponse, IdentityResponse, UserDataResponse } from '../models/firebase-response.model';
import { User } from '../models/user.model';

@Injectable({
	providedIn: 'root',
})
export class AuthService {
	static readonly ID_TOKEN = 'idToken';
	private static readonly ERROR_CLEANER_REGEXP = /\s:\s.*/;

	private readonly firebaseBaseURL: string;
	private readonly firebaseKey: string;
	private readonly firebaseParams: HttpParams;

	private _user!: User;

	constructor(private http: HttpClient, private router: Router, private translocoService: TranslocoService) {
		this.firebaseBaseURL = environment.firebaseBaseURL;
		this.firebaseKey = environment.firebaseKey;
		this.firebaseParams = new HttpParams().set('key', this.firebaseKey);
	}

	private translateError(error: string): Observable<AuthResponse> {
		const cleanError = error.replace(AuthService.ERROR_CLEANER_REGEXP, '');

		return this.translocoService.selectTranslate(cleanError).pipe(
			map<string, AuthResponse>((res) => {
				return { ok: false, errorMessage: res };
			})
		);
	}

	private doAuth(url: string, email: string, password: string): Observable<AuthResponse> {
		const body = { email, password, returnSecureToken: true };

		return this.http
			.post<IdentityResponse>(url, body, { params: this.firebaseParams })
			.pipe(
				map((res) => {
					localStorage.setItem(AuthService.ID_TOKEN, res.idToken);
					return { ok: true };
				}),
				catchError((err: ErrorResponse) => this.translateError(err.error.error.message))
			);
	}

	get user(): User {
		return { ...this._user };
	}

	signUp(email: string, password: string): Observable<AuthResponse> {
		const url = `${this.firebaseBaseURL}/accounts:signUp`;
		return this.doAuth(url, email, password);
	}

	login(email: string, password: string): Observable<AuthResponse> {
		const url = `${this.firebaseBaseURL}/accounts:signInWithPassword`;
		return this.doAuth(url, email, password);
	}

	validateToken(): Observable<boolean> {
		const url = `${this.firebaseBaseURL}/accounts:lookup`;
		const body = { idToken: localStorage.getItem(AuthService.ID_TOKEN) };

		return this.http
			.post<UserDataResponse>(url, body, { params: this.firebaseParams })
			.pipe(
				map((res) => {
					this._user = { displayName: res.displayName, email: res.email };
					return true;
				}),
				catchError(() => {
					this.logout();
					return of(false);
				})
			);
	}

	logout() {
		localStorage.clear();
		this.router.navigateByUrl('auth');
	}
}
