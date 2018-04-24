import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab);

import { HeaderComponent } from './component/header/header.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';

const LAYOUT_COMPONENT = [
  HeaderComponent,
  SidebarComponent
]

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    FontAwesomeModule,
    LAYOUT_COMPONENT
  ],
  declarations: [LAYOUT_COMPONENT]
})
export class SharedModule { }
