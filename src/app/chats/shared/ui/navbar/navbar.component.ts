import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { DividerModule } from 'primeng/divider';
import { ThemeChangeButtonComponent } from '../../../../shared/components/theme-change-button/theme-change-button.component';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { matGroup, matChat, matWorkspaces, matSearch } from '@ng-icons/material-icons/baseline';

@Component({
	selector: 'mchat-navbar',
	standalone: true,
	templateUrl: './navbar.component.html',
	styleUrl: './navbar.component.sass',
	imports: [ButtonModule, ThemeChangeButtonComponent, NgIconComponent, AvatarModule, DividerModule],
	viewProviders: [provideIcons({ matGroup, matChat, matWorkspaces, matSearch })],
})
export class NavbarComponent {}
