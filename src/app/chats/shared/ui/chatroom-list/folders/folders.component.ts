import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ChatFolder } from '../../../models/entities/chat-folders';
import { TextButtonComponent } from '../../../../../shared/components/buttons/text-button/text-button.component';
import { ID } from 'shared/models/id.type';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'mchat-folders',
	standalone: true,
	templateUrl: './folders.component.html',
	styleUrl: './folders.component.sass',
	imports: [TextButtonComponent, CommonModule],
})
export class FoldersComponent {
	@Output()
	public select: EventEmitter<ID> = new EventEmitter<ID>();

	@Input({ required: true })
	public folders: ChatFolder[] | null = [];

	@Input()
	public activeFolderId: ID = 1;

	public selectFolder(folderId: ID): void {
		this.select.emit(folderId);
	}
}
