import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListofusersRoutingModule } from './listofusers-routing.module';
import { AllusersComponent } from './allusers/allusers.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminlistComponent } from './adminlist/adminlist.component';


@NgModule({
  declarations: [AllusersComponent, UserDetailsComponent, AdminlistComponent],
  imports: [
    CommonModule,
    ListofusersRoutingModule,
    ReactiveFormsModule
  ]
})
export class ListofusersModule { }
