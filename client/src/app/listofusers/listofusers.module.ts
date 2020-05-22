import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListofusersRoutingModule } from './listofusers-routing.module';
import { AllusersComponent } from './allusers/allusers.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminlistComponent } from './adminlist/adminlist.component';
import { SchoollistComponent } from './schoollist/schoollist.component';


@NgModule({
  declarations: [AllusersComponent, UserDetailsComponent, AdminlistComponent, SchoollistComponent],
  imports: [
    CommonModule,
    ListofusersRoutingModule,
    ReactiveFormsModule
  ]
})
export class ListofusersModule { }
