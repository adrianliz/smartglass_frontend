import { Component, Input, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { AuthService } from '../../../auth/services/auth.service';
import { Twin } from '../../models/twin.model';
import { TwinsService } from '../../services/twins.service';

@Component({
	selector: 'app-navigation',
	templateUrl: './navigation.component.html'
})
export class NavigationComponent implements OnInit {
	@Input() sidenav!: MatSidenav;
	machines: Twin[] = [];

	constructor(private machinesService: TwinsService, private authService: AuthService) {
	}

	ngOnInit(): void {
		this.machines = this.machinesService.getAll();
	}

	logout() {
		this.authService.logout();
	}
}
