import { Component, Input, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Chatroom, ChatroomShortProifle } from 'chats/shared/models/entities/chatroom.model';
import { ChatroomTypes } from 'chats/shared/models/enums/room-types.enum';
import { ID } from 'shared/models/id.type';
import { ReadCheckComponent } from '../../read-check/read-check.component';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'mchat-chatroom-short-profile',
	standalone: true,
	templateUrl: './chatroom-short-profile.component.html',
	styleUrl: './chatroom-short-profile.component.sass',
	imports: [ReadCheckComponent, CommonModule],
})
export class ChatroomShortProfileComponent {
	private readonly router: Router = inject(Router);

	@Input({ required: true })
	public chatroom!: ChatroomShortProifle;

	@Input()
	public isActive: boolean = false;

	public onClick(chatroomId: ID, chatroomType: ChatroomTypes): void {
		const link: string[] = ['/chats'];
		link.push(chatroomType);
		link.push(chatroomId.toString());

		this.router.navigate(link);
	}
}
