import { Component, Input, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Machine } from '../../models/machine.model';
import { MachinesService } from '../../services/machines.service';

@Component({
	selector: 'app-navigation',
	templateUrl: './navigation.component.html'
})
export class NavigationComponent implements OnInit {
	@Input() sidenav!: MatSidenav;
	machines: Machine[] = [];

	constructor(private machinesService: MachinesService) {
	}

	ngOnInit(): void {
		this.machines = this.machinesService.getAll();
	}
}
