import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../user/guard/auth.guard';
import { SchoolmainComponent } from './schoolmain/schoolmain.component';


const routes: Routes = [
  {
    path: "",
    component: SchoolmainComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchoolactiveRoutingModule { }
