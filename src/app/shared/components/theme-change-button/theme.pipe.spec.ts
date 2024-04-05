import { Themes } from './../../themes.enum';
import { ThemePipe } from './theme.pipe';

describe('ThemePipe', () => {
	it('create an instance', () => {
		const pipe = new ThemePipe();
		expect(pipe).toBeTruthy();
	});

	it("returns 'matWbSunny' if dark theme provided", () => {
		const pipe = new ThemePipe();
		expect(pipe.transform(Themes.DARK)).toBe('matWbSunny');
	});

	it("returns 'matNightlight' if dark theme provided", () => {
		const pipe = new ThemePipe();
		expect(pipe.transform(Themes.LIGHT)).toBe('matNightlight');
	});

	it('returns default value (Light Theme Icon) if theme is incorrect or unknown', () => {
		const pipe = new ThemePipe();
		expect(pipe.transform('Blue Theme')).toBe('matWbSunny');
	});
});
