import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Reaction } from 'shared/models/entities/message.model';
import { ID } from 'shared/models/id.type';
import { RaisedButtonComponent } from '../../../../shared/components/buttons/raised-button/raised-button.component';

@Component({
	selector: 'mchat-reaction',
	standalone: true,
	templateUrl: './reaction.component.html',
	styleUrl: './reaction.component.sass',
	imports: [CommonModule, RaisedButtonComponent],
})
export class ReactionComponent {
	@Input({ required: true })
	public model!: Reaction;

	@Input({ required: true })
	public currentUserId!: ID;

	@Output()
	public onClick: EventEmitter<void> = new EventEmitter<void>();

	public sendSameReaction(): void {
		console.log(this.model.value);

		this.onClick.emit();
	}
}
