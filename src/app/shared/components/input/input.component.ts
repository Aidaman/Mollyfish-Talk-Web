import { Component, Input } from '@angular/core';
import { SeparatorComponent } from '../separator/separator.component';

@Component({
	selector: 'mchat-input',
	standalone: true,
	templateUrl: './input.component.html',
	styleUrl: './input.component.sass',
	imports: [SeparatorComponent],
})
export class InputComponent {
	@Input({ required: true })
	public label?: string;

	@Input({ required: true })
	public placeholder?: string;
}
