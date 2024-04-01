import { Component, inject } from '@angular/core';
import { InputComponent } from '../../shared/components/input/input.component';
import { FilledButtonComponent } from '../../shared/components/buttons/filled-button/filled-button.component';
import { RedirectSectionComponent } from '../shared/ui/redirect-section/redirect-section.component';
import { Router } from '@angular/router';

@Component({
	selector: 'mchat-email-confirmation',
	standalone: true,
	templateUrl: './email-confirmation.component.html',
	styleUrl: './email-confirmation.component.sass',
	imports: [InputComponent, FilledButtonComponent, RedirectSectionComponent],
})
export class EmailConfirmationComponent {
	public router: Router = inject(Router);
	public link: string[] = [];

	public signUp(): void {
		this.router.navigate(['/chats']);
	}

	public resendCode(): void {
		console.log('resending the code');
	}
}
