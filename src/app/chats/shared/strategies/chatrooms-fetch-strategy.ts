import { Observable } from 'rxjs';
import { Chatroom, ChatroomShortProifle } from '../models/entities/chatroom.model';
import { ID } from 'shared/models/id.type';
import { ChatroomTypes } from '../models/enums/room-types.enum';
import { ChatroomId } from '../models/chatroom-id.type';

export abstract class ChatroomFetchStrategy {
	public abstract fetchForMany(userId: ID, roomType: ChatroomTypes): Observable<ChatroomShortProifle[]>;
	public abstract fetchForOne(userId: ID, roomId: ChatroomId): Observable<Chatroom | undefined>;
}
