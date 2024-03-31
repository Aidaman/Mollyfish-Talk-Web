import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { RoundIconButtonComponent } from 'shared/components/buttons/round-icon-button/round-icon-button.component';
import { SeparatorComponent } from 'shared/components/separator/separator.component';
import { ThemeChangeButtonComponent } from 'shared/components/theme-change-button/theme-change-button.component';

@Component({
	selector: 'mchat-navbar',
	standalone: true,
	templateUrl: './navbar.component.html',
	styleUrl: './navbar.component.sass',
	imports: [ThemeChangeButtonComponent, NgIconComponent, SeparatorComponent, RoundIconButtonComponent],
})
export class NavbarComponent {}
