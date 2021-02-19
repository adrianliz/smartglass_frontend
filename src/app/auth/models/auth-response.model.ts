import { ErrorCause } from './firebase-responses.model';

export interface AuthResponse {
	ok: boolean;
	error?: ErrorCause;
}

export const errorMessages = new Map<ErrorCause, string>([
	[ErrorCause.EMAIL_NOT_FOUND, 'Email o contraseña incorrecta'],
	[ErrorCause.INVALID_PASSWORD, 'Email o contraseña incorrecta'],
	[ErrorCause.EMAIL_EXISTS, 'El email ya existe'],
	[ErrorCause.OPERATION_NOT_ALLOWED, 'El servidor no ha permitido la operación'],
	[ErrorCause.TOO_MANY_ATTEMPTS_TRY_LATER, 'Demasiados intentos, pruebe más tarde'],
	[ErrorCause.USER_DISABLED, 'El usuario está deshabilitado'],
	[ErrorCause.USER_NOT_FOUND, 'No se ha encontrado el usuario'],
	[ErrorCause.TOKEN_EXPIRED, 'El token ha expirado'],
	[ErrorCause.INVALID_ID_TOKEN, 'El token es inválido'],
	[ErrorCause.UNDEFINED, 'Ha ocurrido un error']
]);
