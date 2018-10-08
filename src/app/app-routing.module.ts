import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthentificationComponent} from './authentification/authentification.component';
import {ConditionsComponent} from './conditions/conditions.component';

const routes: Routes = [
  { path : '' , component : AuthentificationComponent} ,
  { path: 'conditions', component: ConditionsComponent } ,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
