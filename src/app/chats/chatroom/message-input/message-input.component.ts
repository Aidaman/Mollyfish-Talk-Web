import { Component } from '@angular/core';
import { NgIconComponent } from '@ng-icons/core';

@Component({
	selector: 'mchat-message-input',
	standalone: true,
	imports: [NgIconComponent],
	templateUrl: './message-input.component.html',
	styleUrl: './message-input.component.sass',
})
export class MessageInputComponent {}
