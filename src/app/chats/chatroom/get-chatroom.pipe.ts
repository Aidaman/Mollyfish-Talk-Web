import { Pipe, PipeTransform, inject } from '@angular/core';
import { ChatroomId } from 'chats/shared/models/chatroom-id.type';
import { Chatroom } from 'chats/shared/models/entities/chatroom.model';
import { ChatroomsService } from 'chats/shared/services/chatrooms.service';
import { Observable } from 'rxjs';

@Pipe({
	name: 'getChatroom',
	standalone: true,
})
export class GetChatroomPipe implements PipeTransform {
	private readonly chatroomsService: ChatroomsService = inject(ChatroomsService);

	transform(value: ChatroomId | null, ...args: unknown[]): Observable<Chatroom | undefined> {
		value ??= 'none';

		return this.chatroomsService.provideChatroomById$(value);
	}
}
