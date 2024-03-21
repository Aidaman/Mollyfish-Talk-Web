import { Component, inject } from '@angular/core';
import { ThemeService } from '../../../../shared/services/theme.service';
import { BehaviorSubject } from 'rxjs';
import { ChatroomListBackgroundColorsPipe } from './chatroom-list-background-colors.pipe';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'mchat-chatroom-list',
	standalone: true,
	templateUrl: './chatroom-list.component.html',
	styleUrl: './chatroom-list.component.sass',
	imports: [ChatroomListBackgroundColorsPipe, CommonModule],
})
export class ChatroomListComponent {
	private themeService: ThemeService = inject(ThemeService);
	public currentTheme: BehaviorSubject<string> = this.themeService.currentTheme$;
}
