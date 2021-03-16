export interface IdentityResponse {
	idToken: string;
	email: string;
	refreshToken: string;
	expiresIn: string;
	localId: string;
	registered?: boolean;
}

export interface UserDataResponse {
	email: string;
	displayName?: string;
}

export interface ErrorResponse {
	error: {
		error: {
			code: number,
			message: ErrorCause
		}
	};
}

export enum ErrorCause {
	UNDEFINED = 'UNDEFINED',
	EMAIL_EXISTS = 'EMAIL_EXISTS',
	OPERATION_NOT_ALLOWED = 'OPERATION_NOT_ALLOWED',
	TOO_MANY_ATTEMPTS_TRY_LATER = 'TOO_MANY_ATTEMPTS_TRY_LATER',
	EMAIL_NOT_FOUND = 'EMAIL_NOT_FOUND',
	INVALID_PASSWORD = 'INVALID_PASSWORD',
	USER_DISABLED = 'USER_DISABLED',
	TOKEN_EXPIRED = 'TOKEN_EXPIRED',
	USER_NOT_FOUND = 'USER_NOT_FOUND',
	INVALID_ID_TOKEN = 'INVALID_ID_TOKEN'
}
