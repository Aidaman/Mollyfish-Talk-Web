import { Component } from '@angular/core';
import { Button } from '../button';

@Component({
	selector: 'mchat-outlined-button',
	standalone: true,
	imports: [],
	templateUrl: './outlined-button.component.html',
	styleUrl: './outlined-button.component.sass',
})
export class OutlinedButtonComponent extends Button {}
