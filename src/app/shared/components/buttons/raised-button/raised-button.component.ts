import { Component } from '@angular/core';
import { Button, ButtonModule } from 'primeng/button';

@Component({
	selector: 'mchat-raised-button',
	standalone: true,
	imports: [ButtonModule],
	templateUrl: './raised-button.component.html',
	styleUrl: './raised-button.component.sass',
})
export class RaisedButtonComponent extends Button {}
