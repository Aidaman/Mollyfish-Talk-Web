import { Pipe, PipeTransform } from '@angular/core';
import { Chatroom } from 'chats/shared/models/entities/chatroom.model';
import { ChatroomTypes } from 'chats/shared/models/enums/room-types.enum';

@Pipe({
	name: 'isDirectMessages',
	standalone: true,
})
export class IsDirectMessagesPipe implements PipeTransform {
	transform(value: Chatroom, ...args: unknown[]): boolean {
		return value.roomType === ChatroomTypes.DIRECT_MESSAGES;
	}
}
