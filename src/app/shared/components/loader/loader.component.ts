import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoaderService } from '../../services/loader.service';

@Component({
	selector: 'app-loader',
	templateUrl: './loader.component.html',
	styleUrls: ['loader.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoaderComponent implements OnInit, OnDestroy {
	isLoading = false;
	private subs: Subscription[] = [];

	constructor(private loaderService: LoaderService, private changeDetectorRef: ChangeDetectorRef) {}

	ngOnInit() {
		const sub = this.loaderService.isLoading.subscribe((res) => {
			this.isLoading = res;
			this.changeDetectorRef.detectChanges();
		});
		this.subs.push(sub);
	}

	ngOnDestroy() {
		this.subs.forEach((sub) => sub.unsubscribe());
	}
}
