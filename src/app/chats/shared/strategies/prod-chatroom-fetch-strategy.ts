import { HttpClient } from '@angular/common/http';
import { ChatroomFetchStrategy } from './chatrooms-fetch-strategy';
import { Observable, of } from 'rxjs';
import { Chatroom } from '../models/entities/chatroom.model';
import { MOCK_CHATROOM_LIST } from '../data/mock-chatroom-list.data';
import { ID } from 'shared/models/id.type';
import { ChatroomTypes } from '../models/enums/room-types.enum';

export class ProdChatroomFetchStrategy extends ChatroomFetchStrategy {
	constructor(private readonly http: HttpClient) {
		super();
	}

	public override fetchFor(userId: ID, roomType: ChatroomTypes): Observable<Chatroom[]> {
		return of(MOCK_CHATROOM_LIST.filter(chatroom => chatroom.participantsIds.includes(userId)));
	}
}
