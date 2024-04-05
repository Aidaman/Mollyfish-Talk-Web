import { TestBed } from '@angular/core/testing';

import { ThemeService } from './theme.service';
import { Themes } from '../themes.enum';

describe('ThemeService', () => {
	let service: ThemeService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(ThemeService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	it('should switch form light theme to dark one', () => {
		service.switchTheme();
		expect(service.currentTheme$.value).toBe(Themes.DARK);
	});

	it('should switch form dark theme to light one', () => {
		service.switchTheme();
		expect(service.currentTheme$.value).toBe(Themes.LIGHT);
	});
});
