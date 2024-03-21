import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet],
	template: `<router-outlet></router-outlet>`,
})
export class AppComponent {
	constructor(private primengConfig: PrimeNGConfig) {}

	ngOnInit() {
		this.primengConfig.ripple = true;
	}
}
