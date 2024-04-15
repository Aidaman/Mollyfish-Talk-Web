import { ChatroomId } from 'chats/shared/models/chatroom-id.type';
import { Observable } from 'rxjs';
import { Message, MessageDetails, MessageTypes } from 'shared/models/entities/message.model';
import { ID } from 'shared/models/id.type';

export abstract class MessageFetchStrategy {
	public abstract fetchForMany(roomId: ChatroomId): Observable<Message[]>;
	public abstract fetchForManyDetails(chatroomId: ID): Observable<MessageDetails[]>;
	public abstract fetchForManyOfType(messageType: MessageTypes, roomId?: ChatroomId): Observable<Message[]>;

	public abstract fetchForOne(userId: ID, messageId: ID): Observable<Message | undefined>;
	public abstract fetchForOneOfType(
		userId: ID,
		messageType: MessageTypes,
		messageId: ID,
	): Observable<Message | undefined>;

	public abstract detailsForOne(userId: ID, messageId: ID): Observable<MessageDetails>;
	public abstract detailsForMany(userId: ID, messageIds: ID[]): Observable<MessageDetails[]>;
}
