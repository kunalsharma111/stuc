import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllusersComponent } from './allusers/allusers.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { AuthGuard } from '../user/guard/auth.guard';
import { AdminlistComponent } from './adminlist/adminlist.component';


const routes: Routes = [
  {
    path: "",
    component: AllusersComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "list",
    component: AdminlistComponent,
    canActivate: [AuthGuard]
  },
  {
    path: ":id",
    component: UserDetailsComponent,
    canActivate: [AuthGuard]  
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListofusersRoutingModule { }
