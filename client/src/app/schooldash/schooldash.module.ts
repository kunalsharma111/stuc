import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchooldashRoutingModule } from './schooldash-routing.module';
import { SdashComponent } from './sdash/sdash.component';


@NgModule({
  declarations: [SdashComponent],
  imports: [
    CommonModule,
    SchooldashRoutingModule
  ]
})
export class SchooldashModule { }
