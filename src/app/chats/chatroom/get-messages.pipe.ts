import { Pipe, PipeTransform, inject } from '@angular/core';
import { ChatroomId } from 'chats/shared/models/chatroom-id.type';
import { MessageService } from 'chats/shared/services/message.service';
import { Observable } from 'rxjs';
import { MessageDetails } from 'shared/models/entities/message.model';

@Pipe({
	name: 'getMessages',
	standalone: true,
})
export class GetMessagesPipe implements PipeTransform {
	private readonly messageService: MessageService = inject(MessageService);

	transform(chatroomId: ChatroomId, ...args: unknown[]): Observable<MessageDetails[]> {
		return this.messageService.provideMessages$(chatroomId);
	}
}
