import { ParticipantRoles } from '../enums/participant-roles.enum';
import { UserStatuses } from '../enums/user-status.enum';
import { ID } from '../id.type';

export type User = {
	id: ID;
	name: string;
	tag: string;
	avatarUrl: string;
};

export type UserDetails = User & {
	email: string;
	lastTimeOnline: Date;
	status: UserStatuses;
};

export type ChatroomParticipant = UserDetails & {
	role: ParticipantRoles;
};
