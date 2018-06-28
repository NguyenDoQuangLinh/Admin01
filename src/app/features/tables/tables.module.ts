import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';

import { TablesRoutingModule } from './tables-routing.module';

import { TablesComponent } from './tables.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    TablesRoutingModule
  ],
  declarations: [TablesComponent]
})
export class TablesModule { }
