import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
	selector: 'mchat-auth',
	standalone: true,
	templateUrl: './auth.component.html',
	styleUrl: './auth.component.sass',
	imports: [RouterOutlet, ButtonModule],
})
export class AuthComponent implements OnInit {
	private router: Router = inject(Router);

	ngOnInit(): void {
		this.router.navigate(['auth', 'login']);
	}
}
