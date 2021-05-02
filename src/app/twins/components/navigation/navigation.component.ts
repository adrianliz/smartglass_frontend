import { Component, Input, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { EMPTY, Observable } from 'rxjs';
import { AuthService } from '../../../auth/services/auth.service';
import { TwinInfo } from '../../models/twin-info';
import { TwinsService } from '../../services/twins.service';

@Component({
	selector: 'app-navigation',
	templateUrl: './navigation.component.html',
	styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit {
	@Input() sidenav!: MatSidenav;
	twinsInfo: Observable<TwinInfo[]> = EMPTY;

	constructor(private twinsService: TwinsService, private authService: AuthService) {}

	ngOnInit() {
		this.twinsInfo = this.twinsService.getTwinsInfo();
	}

	logout() {
		this.authService.logout();
	}
}
