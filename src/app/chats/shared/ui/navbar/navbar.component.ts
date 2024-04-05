import { Component, inject } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { RoundIconButtonComponent } from 'shared/components/buttons/round-icon-button/round-icon-button.component';
import { SeparatorComponent } from 'shared/components/separator/separator.component';
import { ThemeChangeButtonComponent } from 'shared/components/theme-change-button/theme-change-button.component';
import { AvatarComponent } from '../../../../shared/components/avatar/avatar.component';
import { Router } from '@angular/router';
import { ChatroomTypes } from 'chats/shared/models/enums/room-types.enum';

@Component({
	selector: 'mchat-navbar',
	standalone: true,
	templateUrl: './navbar.component.html',
	styleUrl: './navbar.component.sass',
	imports: [
		ThemeChangeButtonComponent,
		NgIconComponent,
		SeparatorComponent,
		RoundIconButtonComponent,
		AvatarComponent,
	],
})
export class NavbarComponent {
	private readonly router: Router = inject(Router);
	public avatarUrl?: string = 'https://i.pravatar.cc';

	public openSettings(): void {
		this.router.navigate(['/settings']);
	}

	public openDirectMessages(): void {
		this.router.navigate(['/chats', ChatroomTypes.DIRECT_MESSAGES, 'none']);
	}

	public openGroupChats(): void {
		this.router.navigate(['/chats', ChatroomTypes.GROUP_CHAT, 'none']);
	}
}
