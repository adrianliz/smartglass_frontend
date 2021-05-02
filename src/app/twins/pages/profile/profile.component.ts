import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { take } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { User } from '../../../auth/models/user.model';
import { matcher } from '../../../auth/pages/sign-up/matcher.validator';
import { AuthService } from '../../../auth/services/auth.service';
import { ImageUploaderService } from '../../../shared/services/image-uploader.service';
import { IMAGE_CHECKER } from '../../models/consts';
import { isImage } from './is-image.validator';

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
	user!: User;
	updating = false;
	previewImage: Subject<URL> = new Subject<URL>();
	imageSelected?: File;

	profileForm: FormGroup = this.formBuilder.group(
		{
			profileImage: [''],
			username: ['', [Validators.minLength(4)]],
			password: ['', [Validators.minLength(6)]],
			confirmedPassword: [''],
		},
		{
			validators: [matcher('password', 'confirmedPassword'), isImage('profileImage')],
		}
	);

	constructor(
		private formBuilder: FormBuilder,
		private authService: AuthService,
		private uploadService: ImageUploaderService
	) {}

	ngOnInit() {
		this.authService.user.subscribe((res) => (this.user = res));
		this.profileForm.patchValue({ username: this.user.username });
	}

	get controls(): { [key: string]: AbstractControl } {
		return this.profileForm.controls;
	}

	handleImage(event: Event) {
		const target = event.target as HTMLInputElement;
		const files = target.files as FileList;

		if (files && files[0]) {
			const reader = new FileReader();
			const file = files[0];

			if (IMAGE_CHECKER.test(file.name)) {
				this.imageSelected = file;
				reader.readAsDataURL(file);
				reader.onloadend = () => {
					this.previewImage.next(new URL(reader.result as string));
				};
			}
		}
	}

	private doUpdate(username: string, password: string, photoUrl?: URL) {
		this.authService
			.updateProfile(username, password, photoUrl)
			.pipe(take(1))
			.subscribe((res) => {
				if (res.ok) {
					Swal.fire({
						icon: 'success',
						text: res.successMessage,
					});
					this.updating = false;
				} else {
					Swal.fire({
						icon: 'error',
						title: 'Oops...',
						text: res.errorMessage,
					});
					this.updating = false;
				}
			});
	}

	updateProfile() {
		if (!this.profileForm.valid) {
			return;
		}
		const { username, password } = this.profileForm.value;

		this.updating = true;
		if (this.imageSelected) {
			this.uploadService.uploadImage(this.imageSelected, this.user.id).subscribe((res) => {
				this.user.profileImage = res;
				this.doUpdate(username, password, res);
			});
		} else {
			this.doUpdate(username, password);
		}
	}
}
