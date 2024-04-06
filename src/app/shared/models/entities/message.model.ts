import { ID } from '../id.type';

export type Message = {
	id: ID;
	usersRead: ID[];
	creatorId: ID;
	roomId: ID;
	datePublished: Date;
	content: string;
	hasLinkedContent: boolean;
};

export type MessageDetails = {
	messageType: MessageTypes;
	reactions: Reaction;
	replies: Message[];
	isPinned: boolean;
	linkedContent: string[]; //URL for images / videos / GIFs / etc.
};

export enum MessageStatuses {
	PLAIN,
	EDITED,
}

export type Reaction = {
	amount: number;
	value: string;
	userId: ID;
};

export enum MessageTypes {
	PLAIN = 'plain-message',
	FORWARDED = 'forwarded-message',
	ANSWER = 'answer-message',
	SYSTEM = 'system-message',
	STICKER = 'sticker',

	//! Will be implemented later
	CHANEL_POST = 'channel-post',
	FEED_POST = 'feed-post',
	POLL = 'poll-message',
	ANONYMOUS_POLL = 'anonimous-poll-message',
	ACTION_MESSAGE = 'action-message',
}
