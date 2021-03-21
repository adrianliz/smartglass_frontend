import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
	selector: '[appStatisticItem]',
})
export class StatisticItemDirective {
	constructor(public viewContainerRef: ViewContainerRef) {}
}
