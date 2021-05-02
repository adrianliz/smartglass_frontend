export interface IdentityResponse {
	idToken: string;
	email: string;
	refreshToken: string;
	expiresIn: string;
	localId: string;
	registered?: boolean;
}

export interface UserDataResponse {
	localId: string;
	email: string;
	displayName: string;
	photoUrl: URL;
}

export interface UsersDataResponse {
	users: UserDataResponse[];
}

export interface ErrorResponse {
	error: {
		error: {
			code: number;
			message: string;
		};
	};
}
