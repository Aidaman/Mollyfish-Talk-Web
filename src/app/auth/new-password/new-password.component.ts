import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { RedirectSectionComponent } from 'auth/shared/ui/redirect-section/redirect-section.component';
import { FilledButtonComponent } from 'shared/components/buttons/filled-button/filled-button.component';
import { InputComponent } from 'shared/components/input/input.component';

@Component({
	selector: 'mchat-new-password',
	standalone: true,
	imports: [InputComponent, FilledButtonComponent, RedirectSectionComponent],
	templateUrl: './new-password.component.html',
	styleUrl: './new-password.component.sass',
})
export class NewPasswordComponent {
	private readonly router: Router = inject(Router);

	public link: string[] = [];

	public signIn(): void {
		this.router.navigate(['auth', 'login']);
	}
}
