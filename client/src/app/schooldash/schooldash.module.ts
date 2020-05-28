import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SchooldashRoutingModule } from './schooldash-routing.module';
import { SdashComponent } from './sdash/sdash.component';


@NgModule({
  declarations: [SdashComponent],
  imports: [
    CommonModule,
    SchooldashRoutingModule,
    FormsModule
  ]
})
export class SchooldashModule { }
