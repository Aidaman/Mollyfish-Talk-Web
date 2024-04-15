import { ChatroomId } from 'chats/shared/models/chatroom-id.type';
import { Observable, of } from 'rxjs';
import { Message, MessageTypes, MessageDetails } from 'shared/models/entities/message.model';
import { ID } from 'shared/models/id.type';
import { MessageFetchStrategy } from './message-fetch-strategy';
import { HttpClient } from '@angular/common/http';
import { MOCK_MESSAGES, MOCK_MESSAGES_DETAILS } from 'chats/shared/data/mock-message-list.data';

export class MockMessageFetchStrategy extends MessageFetchStrategy {
	constructor(private readonly http: HttpClient) {
		super();
	}

	public override fetchForMany(roomId: ChatroomId): Observable<Message[]> {
		return of(MOCK_MESSAGES.filter(m => m.roomId.toString() === roomId.toString()));
	}

	public override fetchForManyDetails(chatroomId: ChatroomId): Observable<MessageDetails[]> {
		return of(MOCK_MESSAGES_DETAILS.filter(m => m.roomId.toString() === chatroomId.toString()));
	}

	public override fetchForManyOfType(messageType: MessageTypes, roomId?: ChatroomId): Observable<Message[]> {
		return of(MOCK_MESSAGES.filter(m => m.roomId === roomId));
	}

	public override fetchForOne(userId: ID, messageId: ID): Observable<Message | undefined> {
		throw new Error('Method not implemented.');
	}

	public override fetchForOneOfType(
		userId: ID,
		messageType: MessageTypes,
		messageId: ID,
	): Observable<Message | undefined> {
		throw new Error('Method not implemented.');
	}

	public override detailsForOne(userId: ID, messageId: ID): Observable<MessageDetails> {
		throw new Error('Method not implemented.');
	}

	public override detailsForMany(userId: ID, messageIds: ID[]): Observable<MessageDetails[]> {
		throw new Error('Method not implemented.');
	}
}
