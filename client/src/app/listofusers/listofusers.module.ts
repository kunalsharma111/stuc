import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListofusersRoutingModule } from './listofusers-routing.module';
import { AllusersComponent } from './allusers/allusers.component';
import { UserDetailsComponent } from './user-details/user-details.component';


@NgModule({
  declarations: [AllusersComponent, UserDetailsComponent],
  imports: [
    CommonModule,
    ListofusersRoutingModule
  ]
})
export class ListofusersModule { }
