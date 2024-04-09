import { ChatFolder } from '../models/entities/chat-folders';

export const MOCK_CHATROOM_FOLDERS: ChatFolder[] = [
	{
		id: 1,
		userId: 1,
		roomsIds: [1, 2, 4],
		name: 'all',
	},
	{
		id: 2,
		userId: 1,
		roomsIds: [1, 3],
		name: 'personal',
	},
	{
		id: 3,
		userId: 1,
		roomsIds: [2],
		name: 'work',
	},
];
