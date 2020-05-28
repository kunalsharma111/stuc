import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchoolactiveRoutingModule } from './schoolactive-routing.module';
import { SchoolmainComponent } from './schoolmain/schoolmain.component';


@NgModule({
  declarations: [SchoolmainComponent],
  imports: [
    CommonModule,
    SchoolactiveRoutingModule
  ]
})
export class SchoolactiveModule { }
