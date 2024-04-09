import { ID } from 'shared/models/id.type';

export type ChatFolder = {
	id: ID;
	userId: ID;
	roomsIds: ID[];
	name: string;
};
