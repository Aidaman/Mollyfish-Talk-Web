import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { provideIcons } from '@ng-icons/core';
import {
	matWbSunny,
	matNightlight,
	matGroup,
	matChat,
	matWorkspaces,
	matSearch,
	matDone,
	matDoneAll,
} from '@ng-icons/material-icons/baseline';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet, FormsModule, ReactiveFormsModule],
	template: `<router-outlet></router-outlet>`,
	viewProviders: [
		provideIcons({
			matWbSunny,
			matNightlight,
			matGroup,
			matChat,
			matWorkspaces,
			matSearch,
			matDone,
			matDoneAll,
		}),
	],
})
export class AppComponent {}
