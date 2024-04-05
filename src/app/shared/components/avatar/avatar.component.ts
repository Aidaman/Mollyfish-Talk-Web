import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: 'mchat-avatar',
	standalone: true,
	imports: [],
	templateUrl: './avatar.component.html',
	styleUrl: './avatar.component.sass',
})
export class AvatarComponent {
	@Output()
	public click: EventEmitter<void> = new EventEmitter<void>();

	@Input({ required: true })
	public avatarUrl?: string;

	public onClick(): void {
		this.click.emit();
	}
}
