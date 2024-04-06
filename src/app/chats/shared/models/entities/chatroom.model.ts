import { Message } from 'shared/models/entities/message.model';
import { ChatroomId } from '../chatroom-id.type';
import { ChatroomTypes } from '../enums/room-types.enum';
import { ID } from 'shared/models/id.type';

export type Chatroom = {
	id: ChatroomId;
	name: string;
	participantsIds: ID[];
	creatorId: ID;
	avatarUrl: string;
	lastMessageId: ID;
	lastAction: Date;
	roomType: ChatroomTypes;
};

export type ChatroomShortProifle = Chatroom & {
	lastMessage: Message;
};

export type ChatroomDetails = Chatroom & {
	description: string;
	isAgeRestricted: boolean;
};
