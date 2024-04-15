import { Injectable, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, map, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ChatroomFetchStrategy } from '../strategies/chatroom/chatrooms-fetch-strategy';
import { Chatroom, ChatroomShortProifle } from '../models/entities/chatroom.model';
import { chatroomStrategyFactory } from '../strategies/chatroom/chatroom-fetch-factory';
import { UserService } from 'shared/services/user.service';
import { ChatroomId } from '../models/chatroom-id.type';
import { ChatroomTypes } from '../models/enums/room-types.enum';

@Injectable({
	providedIn: 'root',
})
export class ChatroomsService {
	private readonly http: HttpClient = inject(HttpClient);
	private readonly chatroomFetchStrategy: ChatroomFetchStrategy = chatroomStrategyFactory(this.http);
	private readonly userService: UserService = inject(UserService);

	public provideChatroomList$(chatroomType: ChatroomTypes): Observable<ChatroomShortProifle[]> {
		return this.chatroomFetchStrategy.fetchForManyOfType(this.userService.currentUserId, chatroomType);
	}

	public provideChatroomById$(id: ChatroomId): Observable<Chatroom | undefined> {
		return this.chatroomFetchStrategy.fetchForOne(this.userService.currentUserId, id);
	}
}
