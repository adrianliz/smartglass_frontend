import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MachinesCardsComponent } from './components/machines-cards/machines-cards.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MachineComponent } from './pages/machine/machine.component';

const routes: Routes = [
	{
		path: '',
		component: DashboardComponent,
		children: [
			{ path: '', component: MachinesCardsComponent },
			{ path: ':id', component: MachineComponent }
		]
	}
];

@NgModule({
	imports: [
		RouterModule.forChild(routes)
	],
	exports: [RouterModule]
})
export class MachinesRoutingModule {
}
