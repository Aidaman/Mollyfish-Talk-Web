import { Component, inject } from '@angular/core';
import { FilledButtonComponent } from '../../shared/components/buttons/filled-button/filled-button.component';
import { RedirectSectionComponent } from '../shared/ui/redirect-section/redirect-section.component';
import { InputComponent } from '../../shared/components/input/input.component';
import { Router } from '@angular/router';

@Component({
	selector: 'mchat-recovery',
	standalone: true,
	templateUrl: './recovery.component.html',
	styleUrl: './recovery.component.sass',
	imports: [FilledButtonComponent, RedirectSectionComponent, InputComponent],
})
export class RecoveryComponent {
	private readonly router: Router = inject(Router);
	public link: string[] = ['auth', 'login'];

	public recovery(): void {
		this.router.navigate(['auth', 'email-confirmation']);
	}
}
