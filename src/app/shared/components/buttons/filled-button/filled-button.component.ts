import { Component } from '@angular/core';
import { Button } from '../button';

@Component({
	selector: 'mchat-filled-button',
	standalone: true,
	imports: [],
	templateUrl: './filled-button.component.html',
	styleUrl: './filled-button.component.sass',
})
export class FilledButtonComponent extends Button {}
