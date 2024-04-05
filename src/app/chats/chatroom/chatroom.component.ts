import { Component, Input } from '@angular/core';
import { ChatroomId } from 'chats/shared/models/chatroom-id.type';
import { ChatroomTypes } from 'chats/shared/models/enums/room-types.enum';
import { ID } from 'shared/models/id.type';

@Component({
	selector: 'mchat-chatroom',
	standalone: true,
	imports: [],
	templateUrl: './chatroom.component.html',
	styleUrl: './chatroom.component.sass',
})
export class ChatroomComponent {
	@Input({ required: true })
	public chatId!: ChatroomId | null;

	@Input({ required: true })
	public chatType: ChatroomTypes | null = ChatroomTypes.CHANEL;
}
