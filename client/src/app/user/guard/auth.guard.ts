import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../service/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  anss : boolean;
  constructor(private userService: UserService,private router:Router){
    this.userService.checktype().subscribe(res =>{
      if(res.type == 'Admin'){
        this.anss = true;
      }
      else{
        this.anss = false;
      }
    },err =>{
      console.log(err);
    })
  }
  canActivate():boolean{
    if(this.userService.loggedIn()){
      return true;
    } else{
      this.router.navigate(["user/login"]);
      return false;
    }
  }
}
