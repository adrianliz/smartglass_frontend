import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TwinsCardsComponent } from './components/twins-cards/twins-cards.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TwinComponent } from './pages/twin/twin.component';

const routes: Routes = [
	{
		path: '',
		component: DashboardComponent,
		children: [
			{ path: 'machines', component: TwinsCardsComponent },
			{ path: ':id', component: TwinComponent },
			{ path: '**', redirectTo: 'machines', pathMatch: 'full' }
		]
	}
];

@NgModule({
	imports: [
		RouterModule.forChild(routes)
	],
	exports: [RouterModule]
})
export class TwinsRoutingModule {
}
