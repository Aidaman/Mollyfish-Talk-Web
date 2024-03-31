import { Component, Input } from '@angular/core';

@Component({
	selector: 'mchat-separator',
	standalone: true,
	imports: [],
	templateUrl: './separator.component.html',
	styleUrl: './separator.component.sass',
})
export class SeparatorComponent {
	@Input()
	public label?: string;
}
