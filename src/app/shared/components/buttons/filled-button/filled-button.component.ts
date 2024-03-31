import { Component } from '@angular/core';
import { Button, ButtonModule } from 'primeng/button';

@Component({
	selector: 'mchat-filled-button',
	standalone: true,
	imports: [ButtonModule],
	templateUrl: './filled-button.component.html',
	styleUrl: './filled-button.component.sass',
})
export class FilledButtonComponent extends Button {}
