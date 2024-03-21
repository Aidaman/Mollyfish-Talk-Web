import { Component } from '@angular/core';
import { NavbarComponent } from './shared/ui/navbar/navbar.component';
import { ChatroomListComponent } from './shared/ui/chatroom-list/chatroom-list.component';
import { RouterOutlet } from '@angular/router';

@Component({
	selector: 'mchat-chats',
	standalone: true,
	templateUrl: './chats.component.html',
	styleUrl: './chats.component.sass',
	imports: [NavbarComponent, ChatroomListComponent, RouterOutlet],
})
export class ChatsComponent {}
