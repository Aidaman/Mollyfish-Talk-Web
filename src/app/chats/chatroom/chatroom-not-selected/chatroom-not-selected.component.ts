import { Component, inject } from '@angular/core';
import { ChatroomBackgroundPipe } from './chatroom-background.pipe';
import { CommonModule } from '@angular/common';
import { BehaviorSubject } from 'rxjs';
import { ThemeService } from 'shared/services/theme.service';

@Component({
	selector: 'mchat-chatroom-not-selected',
	standalone: true,
	templateUrl: './chatroom-not-selected.component.html',
	styleUrl: './chatroom-not-selected.component.sass',
	imports: [ChatroomBackgroundPipe, CommonModule],
})
export class ChatroomNotSelectedComponent {
	private readonly themeService: ThemeService = inject(ThemeService);

	public currentTheme$: BehaviorSubject<string> = this.themeService.currentTheme$;
}
