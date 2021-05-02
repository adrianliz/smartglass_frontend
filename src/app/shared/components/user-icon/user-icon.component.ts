import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../../auth/models/user.model';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
	selector: 'app-user-icon',
	templateUrl: './user-icon.component.html',
	styleUrls: ['./user-icon.component.css'],
})
export class UserIconComponent implements OnInit {
	@Input()
	size = 150;
	@Input()
	showInfo = true;
	@Input()
	previewImage?: Observable<URL>;

	@Output()
	iconClick = new EventEmitter();

	user!: User;

	constructor(private authService: AuthService) {}

	ngOnInit() {
		this.authService.user.subscribe((res) => (this.user = res));

		this.previewImage?.subscribe((res) => {
			this.user.profileImage = res;
		});
	}

	emitClick() {
		this.iconClick.emit();
	}
}
