import { Pipe, PipeTransform } from '@angular/core';
import { Themes } from '../../themes.enum';

@Pipe({
	name: 'themeIconPipe',
	standalone: true,
})
export class ThemePipe implements PipeTransform {
	transform(value: string | null, ...args: unknown[]): string {
		switch (value) {
			case Themes.DARK:
				return 'matWbSunny';
			case Themes.LIGHT:
				return 'matNightlight';

			default:
				return 'matNightlight';
		}
	}
}
