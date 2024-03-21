import { Pipe, type PipeTransform } from '@angular/core';
import { Themes } from '../../../../shared/themes.enum';
import { ChatroomListBackgroundColors } from './chatroom-list-background-colors.enum';

@Pipe({
	name: 'mchatChatroomListBackgroundColors',
	standalone: true,
})
export class ChatroomListBackgroundColorsPipe implements PipeTransform {
	transform(value: string | null, ...args: unknown[]): string {
		switch (value) {
			case Themes.LIGHT:
				return ChatroomListBackgroundColors.LIGHT_THEME;
			case Themes.DARK:
				return ChatroomListBackgroundColors.DARK_THEME;
			default:
				return ChatroomListBackgroundColors.LIGHT_THEME;
		}
	}
}
