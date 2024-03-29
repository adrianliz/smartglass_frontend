import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidateTokenGuard } from '../auth/guards/validate-token.guard';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { TwinComponent } from './pages/twin/twin.component';
import { TwinsComponent } from './pages/twins/twins.component';

const routes: Routes = [
	{
		path: '',
		component: DashboardComponent,
		children: [
			{
				path: 'twins',
				component: TwinsComponent,
				canActivate: [ValidateTokenGuard],
			},
			{
				path: 'twin/:twinName',
				component: TwinComponent,
				canActivate: [ValidateTokenGuard],
			},
			{
				path: 'profile',
				component: ProfileComponent,
				canActivate: [ValidateTokenGuard],
			},
			{ path: '**', redirectTo: 'twins', pathMatch: 'full' },
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class TwinsRoutingModule {}
