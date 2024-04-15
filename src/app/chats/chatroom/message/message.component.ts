import { Component, Input, inject } from '@angular/core';
import { AvatarComponent } from '../../../shared/components/avatar/avatar.component';
import { Message, MessageDetails, ReactionDTO } from 'shared/models/entities/message.model';
import { ID } from 'shared/models/id.type';
import { MessageService } from 'chats/shared/services/message.service';
import { CommonModule } from '@angular/common';
import { ReadCheckComponent } from '../../shared/ui/read-check/read-check.component';

@Component({
	selector: 'mchat-message',
	standalone: true,
	templateUrl: './message.component.html',
	styleUrl: './message.component.sass',
	imports: [AvatarComponent, CommonModule, ReadCheckComponent],
})
export class MessageComponent {
	@Input({ required: true })
	public model!: MessageDetails;

	@Input({ required: true })
	public currentUserId!: ID;

	public forwardMessage(messageId: ID): void {
		// const selectedRoomId: ID = this.modlaService.raiseModalWindow(SelectRoomModalWindow);
		// this.messageService.forwardMessage(messageId: ID, selectedRoomId);
	}

	public replyToMessage(messageId: ID): void {
		// this.messageService.replyTo(messageId);
	}

	public reactToMessage(value: string, userId: ID): void {
		const newReaction: ReactionDTO = { value, userId };
		//this.messageService.pushReaction(value);
	}

	public raiseContextMenu(message: Message): void {
		/*
        const action: MessageContextMenuActions = this.contextMenuService.raiseContextMenu(MessageActionsContextMenu, message);
        switch(action) {
            case MessageContextMenuAction.REPLY:
                this.replyToMessage(message.id)
            case MessageContextMenuAction.FORWARD:
                this.forwardMessage(message.id)
            case MessageContextMenuAction.EDIT:
                this.messageService.setEditStatusForMessage(message)
            case MessageContextMenuAction.EDIT:
                this.messageService.setEditStatusForMessage(message)
            case MessageContextMenuAction.PIN:
                this.messageService.pinMessage(message.id, message.roomId)
            case MessageContextMenuAction.SELECT:
                this.messageService.pinMessage(message.id, message.roomId)
            case MessageContextMenuAction.ADD_REACTION:
                this.messageService.addReactionForMessage(message.id)
            case MessageContextMenuAction.COPY_CONTENT:
                this.messageService.copyContent(message.content)
            case MessageContextMenuAction.DELETE:
                this.messageService.deleteMessage(message.id)

            default:
                return
        }
        */
	}
}
