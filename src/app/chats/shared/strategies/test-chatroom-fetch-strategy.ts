import { HttpClient } from '@angular/common/http';
import { ChatroomFetchStrategy } from './chatrooms-fetch-strategy';
import { Observable, of } from 'rxjs';
import { ID } from 'shared/models/id.type';
import { MOCK_CHATROOM_LIST } from '../data/mock-chatroom-list.data';
import { Chatroom, ChatroomShortProifle } from '../models/entities/chatroom.model';
import { ChatroomTypes } from '../models/enums/room-types.enum';
import { ChatroomId } from '../models/chatroom-id.type';

export class TestChatroomFetchStrategy extends ChatroomFetchStrategy {
	constructor(private readonly http: HttpClient) {
		super();
	}

	public override fetchForMany(userId: ID, roomType: ChatroomTypes): Observable<ChatroomShortProifle[]> {
		return of(MOCK_CHATROOM_LIST.filter(chatroom => chatroom.participantsIds.includes(userId)));
	}

	public override fetchForOne(userId: ID, roomId: ChatroomId): Observable<Chatroom | undefined> {
		return of(MOCK_CHATROOM_LIST.find(room => room.participantsIds.includes(userId) && room.id === roomId));
	}
}
