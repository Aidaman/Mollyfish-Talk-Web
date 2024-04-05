import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ID } from 'shared/models/id.type';

@Injectable({
	providedIn: 'root',
})
export class UserService {
	//! LAter on NgRX will be used for handling the logic for extracting this variable
	public currentUserId: ID = 1;

	constructor() {}

	public getCurrentUserId(): Observable<ID> {
		return of(this.currentUserId);
	}
}
