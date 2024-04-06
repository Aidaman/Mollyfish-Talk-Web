import { Component, OnInit, inject } from '@angular/core';
import { NavbarComponent } from '../shared/components/navbar/navbar.component';
import { ChatroomListComponent } from './shared/ui/chatroom-list/chatroom-list.component';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { Observable, catchError, map, of, tap, throwError } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ChatroomTypes } from './shared/models/enums/room-types.enum';
import { ChatroomId } from './shared/models/chatroom-id.type';
import { ChatroomComponent } from './chatroom/chatroom.component';

@Component({
	selector: 'mchat-chats',
	standalone: true,
	templateUrl: './chats.component.html',
	styleUrl: './chats.component.sass',
	imports: [NavbarComponent, ChatroomListComponent, RouterOutlet, CommonModule, ChatroomComponent],
})
export class ChatsComponent {
	private readonly activatedRoute: ActivatedRoute = inject(ActivatedRoute);

	public chatroomType$: Observable<ChatroomTypes> = this.activatedRoute.params.pipe(
		map(({ chatType }) => chatType || ChatroomTypes.DIRECT_MESSAGES),
		catchError(error => {
			console.error(error);
			return throwError(() => new Error(error));
		}),
	);

	public chatroomId$: Observable<ChatroomId> = this.activatedRoute.params.pipe(
		map(({ chatId }) => chatId || 'none'),
		catchError(() => of('none')),
	);
}
