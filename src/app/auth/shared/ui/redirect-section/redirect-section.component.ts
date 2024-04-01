import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { SeparatorComponent } from '../../../../shared/components/separator/separator.component';
import { TextButtonComponent } from '../../../../shared/components/buttons/text-button/text-button.component';
import { Router } from '@angular/router';

@Component({
	selector: 'mchat-redirect-section',
	standalone: true,
	templateUrl: './redirect-section.component.html',
	styleUrl: './redirect-section.component.sass',
	imports: [SeparatorComponent, TextButtonComponent],
})
export class RedirectSectionComponent {
	private readonly router: Router = inject(Router);

	@Output()
	public buttonAction: EventEmitter<void> = new EventEmitter<void>();

	@Input({ required: true })
	public link: string[] = [];

	@Input({ required: true })
	public separatorLabel?: string;

	@Input({ required: true })
	public buttonLabel?: string;

	public redirect(): void {
		if (this.link.length === 0) {
			this.buttonAction.emit();
		}

		this.router.navigate(this.link);
	}
}
