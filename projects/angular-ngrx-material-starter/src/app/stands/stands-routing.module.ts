import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Stand1Component } from './stand1/stand1.component';
import { Stand2Component } from './stand2/stand2.component';
import { Stand3Component } from './stand3/stand3.component';
import { Stand4Component } from './stand4/stand4.component';


const routes: Routes = [
  {
    path: 'stand1',
    component: Stand1Component,
    data: { title: 'anms.menu.about' }
  },
  {
    path: 'stand2',
    component: Stand2Component,
    data: { title: 'anms.menu.about' }
  },
  {
    path: 'stand3',
    component: Stand3Component,
    data: { title: 'anms.menu.about' }
  },
  {
    path: 'stand4',
    component: Stand4Component,
    data: { title: 'anms.menu.about' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StandsRoutingModule {}
