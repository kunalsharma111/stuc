import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SdashComponent } from './sdash/sdash.component';
import { AuthGuard } from '../user/guard/auth.guard';

const routes: Routes = [
  {
    path: "",
    component: SdashComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchooldashRoutingModule { }
