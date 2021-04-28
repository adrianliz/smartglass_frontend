import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { LoaderService } from '../services/loader.service';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
	private totalRequests = 0;

	constructor(private loaderService: LoaderService) {}

	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		this.totalRequests++;
		this.loaderService.setLoading(true);

		return next.handle(req).pipe(
			finalize(() => {
				this.totalRequests--;

				if (this.totalRequests === 0) {
					this.loaderService.setLoading(false);
				}
			})
		);
	}
}
