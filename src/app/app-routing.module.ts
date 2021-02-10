import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'machines',
    loadChildren: () => import('./machines/machines.module').then(m => m.MachinesModule)
  },
  {
    path: '**',
    redirectTo: 'machines'
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
