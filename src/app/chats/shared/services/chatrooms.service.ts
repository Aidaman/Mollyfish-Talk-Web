import { Injectable, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, map, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ChatroomFetchStrategy } from '../strategies/chatrooms-fetch-strategy';
import { Chatroom } from '../models/entities/chatroom.model';
import { chatroomStrategyFactory } from '../strategies/chatroom-fetch-factory';
import { ChatroomTypes } from '../models/enums/room-types.enum';
import { UserService } from 'shared/services/user.service';

@Injectable({
	providedIn: 'root',
})
export class ChatroomsService {
	private readonly http: HttpClient = inject(HttpClient);
	private readonly chatroomFetchStrategy: ChatroomFetchStrategy = chatroomStrategyFactory(this.http);
	private readonly userService: UserService = inject(UserService);

	public provideMessages$(activatedRoute: ActivatedRoute): Observable<unknown> {
		return activatedRoute.params.pipe(map(({ id }) => id));
	}

	public provideChatroomList$(chatroomType: ChatroomTypes): Observable<Chatroom[]> {
		return this.chatroomFetchStrategy.fetchFor(this.userService.currentUserId, chatroomType);
	}
}
