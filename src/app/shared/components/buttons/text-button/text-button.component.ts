import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Button, ButtonModule } from 'primeng/button';

@Component({
	selector: 'mchat-text-button',
	standalone: true,
	imports: [ButtonModule],
	templateUrl: './text-button.component.html',
	styleUrl: './text-button.component.sass',
})
export class TextButtonComponent extends Button {}
