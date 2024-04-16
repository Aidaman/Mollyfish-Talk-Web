import { Component, Input, inject } from '@angular/core';
import { AvatarComponent } from '../../../shared/components/avatar/avatar.component';
import { Message, MessageDetails, Reaction, ReactionDTO } from 'shared/models/entities/message.model';
import { ID } from 'shared/models/id.type';
import { MessageService } from 'chats/shared/services/message.service';
import { CommonModule } from '@angular/common';
import { ReadCheckComponent } from '../../shared/ui/read-check/read-check.component';
import { ReactionComponent } from './reaction/reaction.component';
import { UserService } from 'shared/services/user.service';
import { RoundIconButtonComponent } from 'shared/components/buttons/round-icon-button/round-icon-button.component';

@Component({
	selector: 'mchat-message',
	standalone: true,
	templateUrl: './message.component.html',
	styleUrl: './message.component.sass',
	imports: [AvatarComponent, CommonModule, ReadCheckComponent, ReactionComponent, RoundIconButtonComponent],
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

	public sendSameReaction(reaction: Reaction): void {
		this.model.reactions = this.model.reactions.map(r => {
			if (r.value.toString() !== reaction.value.toString()) {
				return r;
			}

			if (r.userIds.includes(this.currentUserId)) {
				return {
					...r,
					userIds: r.userIds.filter(id => id !== this.currentUserId),
				};
			} else return { ...r, userIds: [...r.userIds, this.currentUserId] };
		});
	}

	public addNewReactionClick(messageId: ID): void {
		console.log('new reaction action');
		//this.messageService.addReactionForMessage(messageId)
	}
}
