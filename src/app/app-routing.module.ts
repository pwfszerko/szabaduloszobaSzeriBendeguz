import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UjFoglalasComponent } from './uj-foglalas/uj-foglalas.component';

const routes: Routes = [
  { path: 'ujfoglalas', component: UjFoglalasComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
