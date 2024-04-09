import { Component, Input } from '@angular/core';
import { ChatroomId } from 'chats/shared/models/chatroom-id.type';
import { ChatroomTypes } from 'chats/shared/models/enums/room-types.enum';
import { ReadCheckComponent } from '../shared/ui/read-check/read-check.component';
import { CommonModule } from '@angular/common';
import { ChatroomBackgroundPipe } from './chatroom-not-selected/chatroom-background.pipe';
import { ChatroomNotSelectedComponent } from './chatroom-not-selected/chatroom-not-selected.component';

@Component({
	selector: 'mchat-chatroom',
	standalone: true,
	templateUrl: './chatroom.component.html',
	styleUrl: './chatroom.component.sass',
	imports: [ReadCheckComponent, CommonModule, ChatroomBackgroundPipe, ChatroomNotSelectedComponent],
})
export class ChatroomComponent {
	@Input({ required: true })
	public chatId!: ChatroomId | null;

	@Input({ required: true })
	public chatType: ChatroomTypes | null = ChatroomTypes.DIRECT_MESSAGES;
}
