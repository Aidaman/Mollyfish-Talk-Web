import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap, of } from 'rxjs';

@Component({
	selector: 'mchat-error-page',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './error-page.component.html',
	styleUrl: './error-page.component.sass',
})
export class ErrorPageComponent {
	private activeRoute: ActivatedRoute = inject(ActivatedRoute);
	private router: Router = inject(Router);

	public statusCode$: Observable<string | null> = this.activeRoute.params.pipe(
		switchMap(({ statusCode }) => {
			if (parseInt(statusCode) !== 404) return of(statusCode.toString());

			this.router.navigate(['/not-found']);
			return of(null);
		}),
	);
}
