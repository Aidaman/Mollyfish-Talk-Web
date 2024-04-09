import { Component } from '@angular/core';
import { InputComponent } from '../input.component';
import { NgIcon } from '@ng-icons/core';

@Component({
	selector: 'mchat-search',
	standalone: true,
	imports: [NgIcon],
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.sass'],
})
export class SearchComponent extends InputComponent {}
