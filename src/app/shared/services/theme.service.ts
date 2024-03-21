import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Themes } from '../themes.enum';

//* Perhaps in the future I will create a Theme class, that will feature theme name and whether it is dark, then just pull available themes and values from somewhere
@Injectable({
	providedIn: 'root',
})
export class ThemeService {
	public currentTheme$: BehaviorSubject<string> = new BehaviorSubject<string>(Themes.LIGHT);

	constructor() {
		this.currentTheme$.next(localStorage.getItem('current-theme') ?? Themes.LIGHT);
	}

	public switchTheme(): void {
		if (this.currentTheme$.getValue() === Themes.LIGHT) {
			this.currentTheme$.next(Themes.DARK);
		} else this.currentTheme$.next(Themes.LIGHT);

		localStorage.setItem('current-theme', this.currentTheme$.getValue());
	}
}
