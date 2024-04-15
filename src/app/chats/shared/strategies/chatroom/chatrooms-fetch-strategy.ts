import { Observable } from 'rxjs';
import { Chatroom, ChatroomDetails, ChatroomShortProifle } from '../../models/entities/chatroom.model';
import { ID } from 'shared/models/id.type';
import { ChatroomTypes } from '../../models/enums/room-types.enum';
import { ChatroomId } from '../../models/chatroom-id.type';

export abstract class ChatroomFetchStrategy {
	public abstract fetchForOne(userId: ID, roomId: ChatroomId): Observable<Chatroom | undefined>;
	public abstract fetchForOnefType(
		userId: ID,
		roomType: ChatroomTypes,
		roomId: ChatroomId,
	): Observable<Chatroom | undefined>;

	public abstract fetchForMany(userId: ID): Observable<ChatroomShortProifle[]>;
	public abstract fetchForManyOfType(userId: ID, roomType: ChatroomTypes): Observable<ChatroomShortProifle[]>;

	public abstract detailsForMany(userId: ID, roomType: ChatroomTypes): Observable<ChatroomDetails>;
	public abstract detailsForOne(userId: ID, roomIds: ChatroomId[]): Observable<ChatroomDetails[]>;
}
