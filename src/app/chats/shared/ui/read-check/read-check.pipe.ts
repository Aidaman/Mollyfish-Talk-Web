import { Pipe, inject, type PipeTransform } from '@angular/core';
import { ID } from 'shared/models/id.type';
import { UserService } from 'shared/services/user.service';

@Pipe({
	name: 'mchatReadCheck',
	standalone: true,
})
export class ReadCheckPipe implements PipeTransform {
	private readonly userService: UserService = inject(UserService);

	transform(value: ID[], ...args: unknown[]): unknown {
		return value.includes(this.userService.currentUserId);
	}
}
