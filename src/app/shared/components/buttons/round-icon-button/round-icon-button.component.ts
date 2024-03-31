import { Component, Input } from '@angular/core';
import { RaisedButtonComponent } from '../raised-button/raised-button.component';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { matGroup, matChat, matWorkspaces, matSearch } from '@ng-icons/material-icons/baseline';
import { Button } from '../button';

@Component({
	selector: 'mchat-round-icon-button',
	standalone: true,
	templateUrl: './round-icon-button.component.html',
	styleUrl: './round-icon-button.component.sass',
	imports: [RaisedButtonComponent, NgIconComponent],
	viewProviders: [provideIcons({ matGroup, matChat, matWorkspaces, matSearch })],
})
export class RoundIconButtonComponent extends Button {
	@Input({ required: true })
	public iconName: string = '';
}
