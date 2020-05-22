import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllusersComponent } from './allusers/allusers.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { AuthGuard } from '../user/guard/auth.guard';
import { AdminlistComponent } from './adminlist/adminlist.component';
import { SchoollistComponent } from './schoollist/schoollist.component';


const routes: Routes = [
  {
    path: "",
    component: AllusersComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "admins",
    component: AdminlistComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "schools",
    component: SchoollistComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "schools/:id",
    component: UserDetailsComponent,
    canActivate: [AuthGuard]  
  },
  {
    path: "admins/:id",
    component: UserDetailsComponent,
    canActivate: [AuthGuard]  
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListofusersRoutingModule { }
