import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DesingRoutingModule } from './components/desing.routing';


const routes: Routes = [];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule,
    DesingRoutingModule
  ]
})
export class AppRoutingModule { }
