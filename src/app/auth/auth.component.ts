import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
	selector: 'mchat-auth',
	standalone: true,
	templateUrl: './auth.component.html',
	styleUrl: './auth.component.sass',
	imports: [RouterOutlet, ButtonModule],
})
export class AuthComponent {}
