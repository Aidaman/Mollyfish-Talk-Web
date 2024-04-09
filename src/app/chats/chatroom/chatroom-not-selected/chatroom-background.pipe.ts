import { Pipe, PipeTransform } from '@angular/core';
import { Themes } from 'shared/themes.enum';
import { chatroomBackgroundURLs } from './chatroom-backgrounds.enum';

@Pipe({
	name: 'chatroomBackground',
	standalone: true,
})
export class ChatroomBackgroundPipe implements PipeTransform {
	transform(value: string | null, ...args: unknown[]): unknown {
		switch (value) {
			case Themes.LIGHT:
				return chatroomBackgroundURLs.LIGHT;
			case Themes.DARK:
				return chatroomBackgroundURLs.DARK;
			default:
				return chatroomBackgroundURLs.LIGHT;
		}
	}
}
