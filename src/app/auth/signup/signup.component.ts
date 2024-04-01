import { Component, inject } from '@angular/core';
import { InputComponent } from '../../shared/components/input/input.component';
import { TextButtonComponent } from '../../shared/components/buttons/text-button/text-button.component';
import { CheckboxComponent } from '../../shared/components/checkbox/checkbox.component';
import { FilledButtonComponent } from '../../shared/components/buttons/filled-button/filled-button.component';
import { RedirectSectionComponent } from 'auth/shared/ui/redirect-section/redirect-section.component';
import { Router } from '@angular/router';

@Component({
	selector: 'mchat-signup',
	standalone: true,
	templateUrl: './signup.component.html',
	styleUrl: './signup.component.sass',
	imports: [InputComponent, TextButtonComponent, CheckboxComponent, FilledButtonComponent, RedirectSectionComponent],
})
export class SignupComponent {
	private readonly router: Router = inject(Router);
	public link: string[] = ['auth', 'login'];

	public confrim(): void {
		this.router.navigate(['auth', 'email-confirmation']);
	}
}
