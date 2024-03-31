import { Component } from '@angular/core';
import { Button } from '../button';

@Component({
	selector: 'mchat-raised-button',
	standalone: true,
	imports: [],
	templateUrl: './raised-button.component.html',
	styleUrl: './raised-button.component.sass',
})
export class RaisedButtonComponent extends Button {}
