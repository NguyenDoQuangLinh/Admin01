import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { SharedModule } from '../shared/shared.module';

import { FeaturesComponent } from './features.component';

@NgModule({
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    SharedModule
  ],
  declarations: [FeaturesComponent]
})
export class FeaturesModule { }
