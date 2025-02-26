import { Component } from '@angular/core';
import { Button } from '../button';

@Component({
    selector: 'mchat-text-button',
    imports: [],
    templateUrl: './text-button.component.html',
    styleUrl: './text-button.component.sass'
})
export class TextButtonComponent extends Button {}
