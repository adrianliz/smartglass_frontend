import { AbstractControl, ValidationErrors } from '@angular/forms';
import { IMAGE_CHECKER } from '../../models/consts';

export function isImage(controlName: string) {
	return (controls: AbstractControl): ValidationErrors | null => {
		const control = controls.get(controlName);

		if (control?.value && !IMAGE_CHECKER.test(control?.value)) {
			control?.setErrors({ invalidImage: true });
			return { invalidImage: true };
		}

		control?.setErrors(null);
		return null;
	};
}
