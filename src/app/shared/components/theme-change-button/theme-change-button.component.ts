import { Component, Inject, Renderer2, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ThemeService } from '../../services/theme.service';
import { ThemePipe } from './theme.pipe';
import { CommonModule, DOCUMENT } from '@angular/common';
import { BehaviorSubject } from 'rxjs';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { matWbSunny, matNightlight } from '@ng-icons/material-icons/baseline';

@Component({
	selector: 'mchat-theme-change-button',
	standalone: true,
	templateUrl: './theme-change-button.component.html',
	styleUrl: './theme-change-button.component.sass',
	imports: [ButtonModule, ThemePipe, CommonModule, NgIconComponent],
	viewProviders: [provideIcons({ matWbSunny, matNightlight })],
})
export class ThemeChangeButtonComponent {
	private themeService: ThemeService = inject(ThemeService);
	public currentTheme$: BehaviorSubject<string> = this.themeService.currentTheme$;

	constructor(
		@Inject(DOCUMENT) private document: Document,
		private renderer: Renderer2,
	) {}

	private applyTheme(theme: string) {
		this.renderer.setAttribute(this.document.body, 'class', theme);
	}

	public switchTheme(): void {
		this.themeService.switchTheme();
		this.applyTheme(this.currentTheme$.getValue());
	}
}
