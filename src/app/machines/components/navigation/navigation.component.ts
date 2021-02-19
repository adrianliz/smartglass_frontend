import { Component, Input, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { AuthService } from '../../../auth/services/auth.service';
import { Machine } from '../../models/machine.model';
import { MachinesService } from '../../services/machines.service';

@Component({
	selector: 'app-navigation',
	templateUrl: './navigation.component.html'
})
export class NavigationComponent implements OnInit {
	@Input() sidenav!: MatSidenav;
	machines: Machine[] = [];

	constructor(private machinesService: MachinesService, private authService: AuthService) {
	}

	ngOnInit(): void {
		this.machines = this.machinesService.getAll();
	}

	logout() {
		this.authService.logout();
	}
}
