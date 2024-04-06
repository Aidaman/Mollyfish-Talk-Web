import { Component, Input } from '@angular/core';
import { ID } from 'shared/models/id.type';
import { ReadCheckPipe } from './read-check.pipe';
import { NgIconComponent } from '@ng-icons/core';

@Component({
	selector: 'mchat-read-check',
	standalone: true,
	imports: [ReadCheckPipe, NgIconComponent],
	templateUrl: './read-check.component.html',
	styleUrl: './read-check.component.sass',
})
export class ReadCheckComponent {
	@Input({ required: true })
	public messageReadBy: ID[] = [];
}
