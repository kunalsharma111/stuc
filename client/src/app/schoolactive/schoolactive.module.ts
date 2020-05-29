import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SchoolactiveRoutingModule } from './schoolactive-routing.module';
import { SchoolmainComponent } from './schoolmain/schoolmain.component';
import { TeachersComponent } from './teachers/teachers.component';
import { StudentsComponent } from './students/students.component';


@NgModule({
  declarations: [SchoolmainComponent, TeachersComponent, StudentsComponent],
  imports: [
    CommonModule,
    SchoolactiveRoutingModule,
    ReactiveFormsModule
  ]
})
export class SchoolactiveModule { }
