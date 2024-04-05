import { Component, Input, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Chatroom } from 'chats/shared/models/entities/chatroom.model';
import { ChatroomTypes } from 'chats/shared/models/enums/room-types.enum';
import { ID } from 'shared/models/id.type';

@Component({
	selector: 'mchat-chatroom-short-profile',
	standalone: true,
	imports: [],
	templateUrl: './chatroom-short-profile.component.html',
	styleUrl: './chatroom-short-profile.component.sass',
})
export class ChatroomShortProfileComponent {
	private readonly router: Router = inject(Router);

	@Input({ required: true })
	public chatroom!: Chatroom;

	@Input()
	public isActive: boolean = false;

	public onClick(chatroomId: ID, chatroomType: ChatroomTypes): void {
		const link: string[] = ['/chats'];
		link.push(chatroomType);
		link.push(chatroomId.toString());

		this.router.navigate(link);
	}
}
