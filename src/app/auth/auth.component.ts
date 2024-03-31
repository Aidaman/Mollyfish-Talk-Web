import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { FilledButtonComponent } from '../shared/components/buttons/filled-button/filled-button.component';
import { OutlinedButtonComponent } from '../shared/components/buttons/outlined-button/outlined-button.component';
import { RaisedButtonComponent } from '../shared/components/buttons/raised-button/raised-button.component';
import { TextButtonComponent } from '../shared/components/buttons/text-button/text-button.component';

@Component({
	selector: 'mchat-auth',
	standalone: true,
	templateUrl: './auth.component.html',
	styleUrl: './auth.component.sass',
	imports: [
		RouterOutlet,
		ButtonModule,
		FilledButtonComponent,
		OutlinedButtonComponent,
		RaisedButtonComponent,
		TextButtonComponent,
	],
})
export class AuthComponent {}
