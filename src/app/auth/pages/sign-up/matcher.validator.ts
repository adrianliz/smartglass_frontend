import { AbstractControl, ValidationErrors } from '@angular/forms';

export function matcher(controlName: string, matchingControlName: string) {
	return (controls: AbstractControl): ValidationErrors | null => {
		const control = controls.get(controlName);
		const matchingControl = controls.get(matchingControlName);

		if ((matchingControl?.errors)  && (! matchingControl.errors.mustMatch)) {
			return null;
		}

		if (control?.value !== matchingControl?.value) {
			matchingControl?.setErrors({ mustMatch: true });
			return { mustMatch: true };
		}

		matchingControl?.setErrors(null);
		return null;
	};
}
