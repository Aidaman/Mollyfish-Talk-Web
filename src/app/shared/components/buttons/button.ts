import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    template: ``,
    standalone: false
})
export abstract class Button {
	@Output()
	public click: EventEmitter<void> = new EventEmitter<void>();

	public onClick(): void {
		this.click.emit();
	}
}
