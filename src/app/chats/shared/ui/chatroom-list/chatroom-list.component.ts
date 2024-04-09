import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetChatroomsPipe } from './get-chatrooms.pipe';
import { ChatroomShortProfileComponent } from './chatroom-short-profile/chatroom-short-profile.component';
import { ChatroomId } from 'chats/shared/models/chatroom-id.type';
import { ChatroomTypes } from 'chats/shared/models/enums/room-types.enum';
import { SearchComponent } from '../../../../shared/components/input/search/search.component';
import { FoldersComponent } from './folders/folders.component';
import { MOCK_CHATROOM_FOLDERS } from 'chats/shared/data/mock-chatroom-folder-list.data';
import { ChatFolder } from 'chats/shared/models/entities/chat-folders';
import { ID } from 'shared/models/id.type';

@Component({
	selector: 'mchat-chatroom-list',
	standalone: true,
	templateUrl: './chatroom-list.component.html',
	styleUrl: './chatroom-list.component.sass',
	imports: [CommonModule, ChatroomShortProfileComponent, GetChatroomsPipe, SearchComponent, FoldersComponent],
})
export class ChatroomListComponent {
	@Input({ required: true })
	public chatType: ChatroomTypes | null = ChatroomTypes.DIRECT_MESSAGES;

	@Input({ required: true })
	public chatId: ChatroomId | null = 'none';

	folders: ChatFolder[] = MOCK_CHATROOM_FOLDERS;

	activeFolderId: ID = this.folders?.at(1)?.id ?? 1;

	public selectFolder(selectedFodlerId: ID): void {
		this.activeFolderId = selectedFodlerId;
	}
}
