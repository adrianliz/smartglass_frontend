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
			code: number;
			message: string;
		};
	};
}
