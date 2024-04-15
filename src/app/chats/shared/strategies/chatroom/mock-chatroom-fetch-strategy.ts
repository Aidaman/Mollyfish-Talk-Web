import { HttpClient } from '@angular/common/http';
import { ChatroomFetchStrategy } from './chatrooms-fetch-strategy';
import { Observable, of } from 'rxjs';
import { MOCK_CHATROOM_LIST } from '../../data/mock-chatroom-list.data';
import { Chatroom, ChatroomDetails, ChatroomShortProifle } from '../../models/entities/chatroom.model';
import { ID } from 'shared/models/id.type';
import { ChatroomTypes } from '../../models/enums/room-types.enum';
import { ChatroomId } from '../../models/chatroom-id.type';

export class MockChatroomFetchStrategy extends ChatroomFetchStrategy {
	constructor(private readonly http: HttpClient) {
		super();
	}

	public override fetchForMany(userId: ID): Observable<ChatroomShortProifle[]> {
		return of(MOCK_CHATROOM_LIST.filter(chatroom => chatroom.participantsIds.includes(userId)));
	}

	public override fetchForOne(userId: ID, roomId: ChatroomId): Observable<Chatroom | undefined> {
		return of(MOCK_CHATROOM_LIST.find(room => room.participantsIds.includes(userId) && room.id === roomId));
	}

	public override fetchForOnefType(
		userId: ID,
		roomType: ChatroomTypes,
		roomId: ChatroomId,
	): Observable<Chatroom | undefined> {
		throw new Error('Method not implemented.');
	}

	public override fetchForManyOfType(userId: ID, roomType: ChatroomTypes): Observable<ChatroomShortProifle[]> {
		return of(
			MOCK_CHATROOM_LIST.filter(
				chatroom => chatroom.participantsIds.includes(userId) && chatroom.roomType === roomType,
			),
		);
	}

	public override detailsForMany(userId: ID, roomType: ChatroomTypes): Observable<ChatroomDetails> {
		throw new Error('Method not implemented.');
	}

	public override detailsForOne(userId: ID, roomIds: ChatroomId[]): Observable<ChatroomDetails[]> {
		throw new Error('Method not implemented.');
	}
}
