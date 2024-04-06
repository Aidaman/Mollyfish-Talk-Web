import { Pipe, PipeTransform, inject } from '@angular/core';
import { Chatroom, ChatroomShortProifle } from 'chats/shared/models/entities/chatroom.model';
import { ChatroomTypes } from 'chats/shared/models/enums/room-types.enum';
import { ChatroomsService } from 'chats/shared/services/chatrooms.service';
import { Observable } from 'rxjs';

@Pipe({
	name: 'getChatrooms',
	standalone: true,
})
export class GetChatroomsPipe implements PipeTransform {
	private readonly chatroomsService: ChatroomsService = inject(ChatroomsService);

	transform(value: ChatroomTypes | null, ...args: unknown[]): Observable<ChatroomShortProifle[]> {
		const chatroomType: ChatroomTypes = value ?? ChatroomTypes.DIRECT_MESSAGES;

		return this.chatroomsService.provideChatroomList$(chatroomType);
	}
}
