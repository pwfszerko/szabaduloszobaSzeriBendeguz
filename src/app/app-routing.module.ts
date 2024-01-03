import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UjFoglalasComponent } from './uj-foglalas/uj-foglalas.component';
// További komponensek importálása...

const routes: Routes = [
  // ...további útvonalak
  { path: 'ujfoglalas', component: UjFoglalasComponent },
  // ...további útvonalak
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
