import { AbstractControl } from '@angular/forms';

export function matcher(controlName: string, matchingControlName: string) {
	return (controls: AbstractControl) => {
		const control = controls.get(controlName);
		const matchingControl = controls.get(matchingControlName);

		if ((control === null) || (matchingControl === null)) {
			return;
		}

		if ((matchingControl.errors) && (! matchingControl.errors.mustMatch)) {
			return;
		}

		if (control.value !== matchingControl.value) {
			matchingControl.setErrors({ mustMatch: true });
		} else {
			matchingControl.setErrors(null);
		}
	};
}
