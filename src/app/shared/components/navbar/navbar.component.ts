import { Component, Input, inject } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { RoundIconButtonComponent } from 'shared/components/buttons/round-icon-button/round-icon-button.component';
import { SeparatorComponent } from 'shared/components/separator/separator.component';
import { ThemeChangeButtonComponent } from 'shared/components/theme-change-button/theme-change-button.component';
import { AvatarComponent } from '../avatar/avatar.component';
import { ActivatedRoute, Router } from '@angular/router';
import { ChatroomTypes } from 'chats/shared/models/enums/room-types.enum';
import { Observable, map } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'mchat-navbar',
	standalone: true,
	templateUrl: './navbar.component.html',
	styleUrl: './navbar.component.sass',
	imports: [
		CommonModule,
		ThemeChangeButtonComponent,
		NgIconComponent,
		SeparatorComponent,
		RoundIconButtonComponent,
		AvatarComponent,
	],
})
export class NavbarComponent {
	private readonly activatedRoute: ActivatedRoute = inject(ActivatedRoute);
	private readonly router: Router = inject(Router);
	public readonly avatarUrl?: string = 'https://i.pravatar.cc?img=32';
	public chatType$: Observable<string | undefined> = this.activatedRoute.params.pipe(map(({ chatType }) => chatType));

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
