import { Observable } from 'rxjs';
import { Chatroom, ChatroomShortProifle } from '../models/entities/chatroom.model';
import { ID } from 'shared/models/id.type';
import { ChatroomTypes } from '../models/enums/room-types.enum';

export abstract class ChatroomFetchStrategy {
	public abstract fetchFor(userId: ID, roomType: ChatroomTypes): Observable<ChatroomShortProifle[]>;
}
