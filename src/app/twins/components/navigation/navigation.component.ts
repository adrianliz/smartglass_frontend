import { Component, Input, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { AuthService } from '../../../auth/services/auth.service';
import { Twin } from '../../models/twin.model';
import { TwinsService } from '../../services/twins.service';

@Component({
	selector: 'app-navigation',
	templateUrl: './navigation.component.html',
})
export class NavigationComponent implements OnInit {
	@Input() sidenav!: MatSidenav;
	twins: Twin[] = [];

	constructor(private twinsService: TwinsService, private authService: AuthService) {}

	ngOnInit(): void {
		this.twinsService.getTwins().subscribe((res) => (this.twins = res));
	}

	logout() {
		this.authService.logout();
	}
}
