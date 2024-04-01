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
				path: 'new-password',
				loadComponent: () => import('./new-password/new-password.component').then(c => c.NewPasswordComponent),
			},
			{
				path: 'recovery',
				loadComponent: () => import('./recovery/recovery.component').then(c => c.RecoveryComponent),
			},
			{
				path: 'new-password',
				loadComponent: () => import('./recovery/recovery.component').then(c => c.RecoveryComponent),
			},
			{
				path: 'email-confirmation',
				loadComponent: () =>
					import('./email-confirmation/email-confirmation.component').then(c => c.EmailConfirmationComponent),
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
		redirectTo: 'login',
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class AuthRoutingModule {}
