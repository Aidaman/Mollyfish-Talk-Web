import { Pipe, PipeTransform } from '@angular/core';
import { ChatFolder } from 'chats/shared/models/entities/chat-folders';
import { ChatroomShortProifle } from 'chats/shared/models/entities/chatroom.model';
import { ID } from 'shared/models/id.type';

@Pipe({
	name: 'applyFolder',
	standalone: true,
})
export class ApplyFolderPipe implements PipeTransform {
	transform(value: ChatroomShortProifle, folder?: ChatFolder, ...args: unknown[]): boolean {
		if (!folder) {
			return true;
		}

		const roomIds: string[] = folder.roomsIds.map((id: ID) => id.toString());
		return roomIds.includes(value.id.toString());
	}
}
