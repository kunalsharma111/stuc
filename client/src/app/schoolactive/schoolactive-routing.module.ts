import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../user/guard/auth.guard';
import { SchoolmainComponent } from './schoolmain/schoolmain.component';
import { StudentsComponent } from './students/students.component';
import { TeachersComponent } from './teachers/teachers.component';


const routes: Routes = [
  {
    path: "",
    component: SchoolmainComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "students",
    component: StudentsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "teachers",
    component: TeachersComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchoolactiveRoutingModule { }
