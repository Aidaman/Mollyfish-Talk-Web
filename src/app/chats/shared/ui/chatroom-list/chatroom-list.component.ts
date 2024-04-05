import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetChatroomsPipe } from './get-chatrooms.pipe';
import { ChatroomShortProfileComponent } from './chatroom-short-profile/chatroom-short-profile.component';
import { ChatroomId } from 'chats/shared/models/chatroom-id.type';
import { ChatroomTypes } from 'chats/shared/models/enums/room-types.enum';

@Component({
	selector: 'mchat-chatroom-list',
	standalone: true,
	templateUrl: './chatroom-list.component.html',
	styleUrl: './chatroom-list.component.sass',
	imports: [CommonModule, ChatroomShortProfileComponent, GetChatroomsPipe],
})
export class ChatroomListComponent {
	@Input({ required: true })
	public chatType: ChatroomTypes | null = ChatroomTypes.DIRECT_MESSAGES;

	@Input({ required: true })
	public chatId: ChatroomId | null = 'none';
}
