import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: ':chatType/:chatId',
		loadComponent: () => import('./chats.component').then(c => c.ChatsComponent),
	},
	{
		path: '**',
		redirectTo: 'direct-messages/none',
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class ChatsRoutingModule {}
