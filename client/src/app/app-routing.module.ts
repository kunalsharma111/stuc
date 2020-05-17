import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path:"",
    redirectTo:"user",
    pathMatch: "full"
  },
  {
    path:"listofusers",
    loadChildren: () =>
    import("./listofusers/listofusers.module").then(m => m.ListofusersModule)
  },
  {
    path:"user",
    loadChildren:() =>
    import("./user/user.module").then(m => m.UserModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
