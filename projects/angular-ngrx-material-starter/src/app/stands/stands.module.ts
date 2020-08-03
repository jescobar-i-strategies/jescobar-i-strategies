import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { StandsRoutingModule } from './stands-routing.module';
import { Stand1Component } from './stand1/stand1.component';
import { Stand2Component } from './stand2/stand2.component';
import { Stand3Component } from './stand3/stand3.component';
import { Stand4Component } from './stand4/stand4.component';


@NgModule({
  declarations: [Stand1Component, Stand2Component,Stand3Component, Stand4Component],
  imports: [CommonModule, SharedModule, StandsRoutingModule]
})
export class StandsModule {}
