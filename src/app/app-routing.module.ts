import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlreadyLoggedInGuard } from './auth/guards/already-logged-in.guard';
import { ValidateTokenGuard } from './auth/guards/validate-token.guard';

const routes: Routes = [
	{
		path: 'auth',
		loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
		canActivate: [AlreadyLoggedInGuard],
		canLoad: [AlreadyLoggedInGuard]
	},
	{
		path: 'dashboard',
		loadChildren: () => import('./machines/twins.module').then(m => m.TwinsModule),
		canActivate: [ValidateTokenGuard],
		canLoad: [ValidateTokenGuard]
	},
	{
		path: '**',
		redirectTo: 'auth'
	}
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes)
	],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
