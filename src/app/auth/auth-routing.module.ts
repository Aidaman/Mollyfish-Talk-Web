import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';

const routes: Routes = [
	{
		path: '',
		component: AuthComponent,
		children: [
			{
				path: 'login',
				loadComponent: () => import('./login/login.component').then(c => c.LoginComponent),
			},
			{
				path: 'signup',
				loadComponent: () => import('./signup/signup.component').then(c => c.SignupComponent),
			},
			{
				path: 'register',
				redirectTo: 'signup',
				pathMatch: 'full',
			},
		],
	},
	{
		path: '**',
		redirectTo: '',
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class AuthRoutingModule {}
