import { Component, inject } from '@angular/core';
import { InputComponent } from '../../shared/components/input/input.component';
import { TextButtonComponent } from '../../shared/components/buttons/text-button/text-button.component';
import { CheckboxComponent } from '../../shared/components/checkbox/checkbox.component';
import { FilledButtonComponent } from '../../shared/components/buttons/filled-button/filled-button.component';
import { RedirectSectionComponent } from '../shared/ui/redirect-section/redirect-section.component';
import { Router } from '@angular/router';

@Component({
	selector: 'mchat-login',
	standalone: true,
	templateUrl: './login.component.html',
	styleUrl: './login.component.sass',
	imports: [InputComponent, TextButtonComponent, CheckboxComponent, FilledButtonComponent, RedirectSectionComponent],
})
export class LoginComponent {
	private readonly router: Router = inject(Router);

	public link: string[] = ['auth', 'signup'];

	public signIn(): void {
		this.router.navigate(['auth', 'email-confirmation']);
	}

	public navigateToRecover(): void {
		this.router.navigate(['auth', 'recovery']);
	}
}
