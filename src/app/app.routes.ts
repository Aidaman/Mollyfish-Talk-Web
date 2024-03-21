import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './shared/pages/page-not-found/page-not-found.component';
import { ErrorPageComponent } from './shared/pages/error-page/error-page.component';

export const routes: Routes = [
	{
		path: '',
		redirectTo: 'home',
		pathMatch: 'full',
	},
	{
		path: 'auth',
		title: 'mollyfish-talk auth',
		loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
	},
	{
		path: 'chats',
		title: 'mollyfish-talk',
		loadChildren: () => import('./chats/chats.module').then(m => m.ChatsModule),
	},
	{
		path: 'discover',
		title: 'mollyfish-talk discover',
		loadChildren: () => import('./discover/discover.module').then(m => m.DiscoverModule),
	},
	{
		path: 'home',
		title: 'mollyfish-talk',
		loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
	},
	{
		path: 'landing',
		title: 'mollyfish-talk',
		loadChildren: () => import('./landing/landing.module').then(m => m.LandingModule),
	},
	{
		path: 'settings',
		title: 'mollyfish-talk settings',
		loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule),
	},
	{
		path: 'error/:statusCode',
		title: 'mollyfish-talk error',
		component: ErrorPageComponent,
	},
	{
		path: '**',
		title: 'page not found :(',
		component: PageNotFoundComponent,
	},
];
