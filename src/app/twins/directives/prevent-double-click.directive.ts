import { Directive, EventEmitter, HostListener, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { throttleTime } from 'rxjs/operators';

@Directive({
	selector: '[appPreventDoubleClick]',
})
export class PreventDoubleClickDirective implements OnInit, OnDestroy {
	@Input()
	throttleTime = 2000;

	@Output()
	throttledClick = new EventEmitter();

	private clicks = new Subject();
	private subscription!: Subscription;

	constructor() {}

	ngOnInit() {
		this.subscription = this.clicks
			.pipe(throttleTime(this.throttleTime))
			.subscribe((action) => this.emitThrottledClick(action));
	}

	emitThrottledClick(action: any) {
		this.throttledClick.emit(action);
	}

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}

	@HostListener('click', ['$event'])
	clickEvent(event: Event): void {
		event.preventDefault();
		event.stopPropagation();
		this.clicks.next(event);
	}
}
