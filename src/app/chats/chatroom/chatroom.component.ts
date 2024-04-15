import { Component, Input, inject } from '@angular/core';
import { ChatroomId } from 'chats/shared/models/chatroom-id.type';
import { ChatroomTypes } from 'chats/shared/models/enums/room-types.enum';
import { ReadCheckComponent } from '../shared/ui/read-check/read-check.component';
import { CommonModule } from '@angular/common';
import { ChatroomBackgroundPipe } from './chatroom-not-selected/chatroom-background.pipe';
import { ChatroomNotSelectedComponent } from './chatroom-not-selected/chatroom-not-selected.component';
import { ChatroomHeadingComponent } from './chatroom-heading/chatroom-heading.component';
import { GetChatroomPipe } from './get-chatroom.pipe';
import { MessageComponent } from './message/message.component';
import { UserService } from 'shared/services/user.service';
import { ID } from 'shared/models/id.type';
import { GetMessagesPipe } from './get-messages.pipe';

@Component({
	selector: 'mchat-chatroom',
	standalone: true,
	templateUrl: './chatroom.component.html',
	styleUrl: './chatroom.component.sass',
	imports: [
		ReadCheckComponent,
		CommonModule,
		ChatroomBackgroundPipe,
		ChatroomNotSelectedComponent,
		ChatroomHeadingComponent,
		GetChatroomPipe,
		MessageComponent,
		GetMessagesPipe,
	],
})
export class ChatroomComponent {
	private readonly userService: UserService = inject(UserService);

	@Input({ required: true })
	public chatId!: ChatroomId | null;

	@Input({ required: true })
	public chatType: ChatroomTypes | null = ChatroomTypes.DIRECT_MESSAGES;

	public currentUserId: ID = this.userService.currentUserId;
}
