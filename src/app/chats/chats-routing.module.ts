import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		loadComponent: () => import('./chats.component').then(c => c.ChatsComponent),
		children: [
			{
				path: 'direct-messages',
				loadChildren: () =>
					import('./direct-messages/direct-messages.module').then(m => m.DirectMessagesModule),
			},
			{
				path: 'spaces',
				loadChildren: () => import('./spaces/spaces.module').then(m => m.SpacesModule),
			},
		],
	},
	{
		path: '**',
		redirectTo: 'direct-messages',
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class ChatsRoutingModule {}
