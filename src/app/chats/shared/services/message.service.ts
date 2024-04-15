import { Injectable, inject } from '@angular/core';
import { messageStrategyFactory } from '../strategies/message/message-fetch-factory';
import { HttpClient } from '@angular/common/http';
import { UserService } from 'shared/services/user.service';
import { ChatroomFetchStrategy } from '../strategies/chatroom/chatrooms-fetch-strategy';
import { MessageFetchStrategy } from '../strategies/message/message-fetch-strategy';
import { ChatroomId } from '../models/chatroom-id.type';
import { Observable } from 'rxjs';
import { MessageDetails } from 'shared/models/entities/message.model';

@Injectable({
	providedIn: 'root',
})
export class MessageService {
	private readonly http: HttpClient = inject(HttpClient);
	private readonly messageFetchStrategy: MessageFetchStrategy = messageStrategyFactory(this.http);
	private readonly userService: UserService = inject(UserService);

	public provideMessages$(chatroomId: ChatroomId): Observable<MessageDetails[]> {
		return this.messageFetchStrategy.fetchForManyDetails(chatroomId);
	}
}
