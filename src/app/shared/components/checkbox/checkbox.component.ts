import { Component, Input } from '@angular/core';

@Component({
	selector: 'mchat-checkbox',
	standalone: true,
	imports: [],
	templateUrl: './checkbox.component.html',
	styleUrl: './checkbox.component.sass',
})
export class CheckboxComponent {
	@Input({ required: true })
	public name?: string;
}
