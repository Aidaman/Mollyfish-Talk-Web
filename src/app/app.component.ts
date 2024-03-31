import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { provideIcons } from '@ng-icons/core';
import {
	matWbSunny,
	matNightlight,
	matGroup,
	matChat,
	matWorkspaces,
	matSearch,
} from '@ng-icons/material-icons/baseline';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet],
	template: `<router-outlet></router-outlet>`,
	viewProviders: [provideIcons({ matWbSunny, matNightlight, matGroup, matChat, matWorkspaces, matSearch })],
})
export class AppComponent {}
