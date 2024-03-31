import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Button, ButtonModule } from 'primeng/button';

@Component({
	selector: 'mchat-outlined-button',
	standalone: true,
	imports: [ButtonModule],
	templateUrl: './outlined-button.component.html',
	styleUrl: './outlined-button.component.sass',
})
export class OutlinedButtonComponent extends Button {}
