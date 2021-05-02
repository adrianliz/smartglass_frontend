import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TranslocoService } from '@ngneat/transloco';
import { Observable, of, ReplaySubject, Subject } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { LangRetrieverService } from '../../shared/services/lang-retriever.service';
import { AuthResponse } from '../models/auth-response.model';
import {
	ErrorResponse,
	IdentityResponse,
	UserDataResponse,
	UsersDataResponse,
} from '../models/firebase-response.model';
import { User } from '../models/user.model';

@Injectable({
	providedIn: 'root',
})
export class AuthService {
	static readonly ID_TOKEN = 'idToken';
	private static readonly ERROR_CLEANER_REGEXP = /\s:\s.*/;

	private readonly authBaseUrl: string;
	private readonly authParams: HttpParams;

	user: Subject<User> = new ReplaySubject<User>();

	constructor(private http: HttpClient, private router: Router, private translocoService: TranslocoService) {
		this.authBaseUrl = environment.firebase.authBaseURL;
		this.authParams = new HttpParams().set('key', environment.firebase.apiKey);
	}

	private translateMessage(message: string, scope: string): Observable<string> {
		return this.translocoService.selectTranslate(message, {}, { scope });
	}

	private translateError(error: string): Observable<AuthResponse> {
		const cleanError = error.replace(AuthService.ERROR_CLEANER_REGEXP, '');

		return this.translateMessage(cleanError, 'errors').pipe(
			map<string, AuthResponse>((res) => {
				return { ok: false, errorMessage: res };
			})
		);
	}

	private doAuth(url: string, email: string, password: string): Observable<AuthResponse> {
		const body = { email, password, returnSecureToken: true };

		return this.http
			.post<IdentityResponse>(url, body, { params: this.authParams })
			.pipe(
				map((res) => {
					localStorage.setItem(AuthService.ID_TOKEN, res.idToken);
					return { ok: true };
				}),
				catchError((err: ErrorResponse) => {
					return this.translateError(err.error.error.message);
				})
			);
	}

	private updateUser(userData: UserDataResponse) {
		this.user.next({
			id: userData.localId,
			profileImage: userData.photoUrl,
			username: userData.displayName,
			email: userData.email,
		});
	}

	signUp(email: string, password: string): Observable<AuthResponse> {
		const url = `${this.authBaseUrl}/accounts:signUp`;
		return this.doAuth(url, email, password);
	}

	login(email: string, password: string): Observable<AuthResponse> {
		const url = `${this.authBaseUrl}/accounts:signInWithPassword`;
		return this.doAuth(url, email, password);
	}

	updateProfile(username: string, password: string, photoUrl: URL | undefined): Observable<AuthResponse> {
		const url = `${this.authBaseUrl}/accounts:update`;
		const body = {
			idToken: localStorage.getItem(AuthService.ID_TOKEN),
			displayName: username || null,
			password: password || null,
			photoUrl,
			returnSecureToken: true,
		};

		return this.http
			.post<UserDataResponse>(url, body, { params: this.authParams })
			.pipe(
				switchMap((res) => {
					this.updateUser(res);
					return this.translateMessage('SUCCESS_UPDATE', 'twins').pipe(
						map<string, AuthResponse>((message) => {
							return { ok: true, successMessage: message };
						})
					);
				}),
				catchError((err: ErrorResponse) => {
					console.log(err);
					return this.translateError(err.error.error.message);
				})
			);
	}

	validateToken(): Observable<boolean> {
		const url = `${this.authBaseUrl}/accounts:lookup`;
		const body = { idToken: localStorage.getItem(AuthService.ID_TOKEN) };

		return this.http
			.post<UsersDataResponse>(url, body, { params: this.authParams })
			.pipe(
				map((res) => {
					this.updateUser(res.users[0]);
					return true;
				}),
				catchError(() => {
					this.logout();
					return of(false);
				})
			);
	}

	logout() {
		const idLang = localStorage.getItem(LangRetrieverService.ID_LANG);
		localStorage.clear();

		if (idLang) {
			localStorage.setItem(LangRetrieverService.ID_LANG, idLang);
		}
		this.router.navigateByUrl('auth');
	}
}
