import { ParticipantRoles } from '../enums/participant-roles.enum';
import { UserStatuses } from '../enums/user-status.enum';
import { ID } from '../id.type';

export type UserBase = {
	id: ID;
	name: string;
	tag: string;
	avatarUrl: string;
};

export type User = UserBase & {
	email: string;
	lastTimeOnline: Date;
	status: UserStatuses;
};

export type ChatroomParticipant = User & {
	role: ParticipantRoles;
};
