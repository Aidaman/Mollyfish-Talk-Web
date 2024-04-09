import { Component, Input } from '@angular/core';
import { AvatarComponent } from '../../../shared/components/avatar/avatar.component';
import { Chatroom } from 'chats/shared/models/entities/chatroom.model';
import { IsDirectMessagesPipe } from './is-direct-messages.pipe';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'mchat-chatroom-heading',
	standalone: true,
	templateUrl: './chatroom-heading.component.html',
	styleUrl: './chatroom-heading.component.sass',
	imports: [AvatarComponent, IsDirectMessagesPipe, CommonModule],
})
export class ChatroomHeadingComponent {
	@Input({ required: true })
	public chatroom!: Chatroom | null | undefined;
}
