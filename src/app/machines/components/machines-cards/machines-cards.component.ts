import { Component, OnInit } from '@angular/core';
import { Machine } from '../../models/machine.model';
import { MachinesService } from '../../services/machines.service';

@Component({
	selector: 'app-dashboard',
	templateUrl: './machines-cards.component.html'
})
export class MachinesCardsComponent implements OnInit {
	machines: Machine[] = [];

	constructor(private service: MachinesService) {
	}

	ngOnInit(): void {
		this.machines = this.service.getAll();
	}
}
