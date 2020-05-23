import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../service/user.service';

@Injectable({
  providedIn: 'root'
})
export class SchoolguardGuard implements CanActivate {
  ans : boolean;
  constructor(private userService: UserService ,private router:Router){
    this.userService.checktype().subscribe(res =>{
      if(res.type == 'School' || res.type == 'User' || res.type == 'user'){
        this.ans = true;
      }
      else{
        this.ans = false;
      }
    },err =>{
      console.log(err);
    })
  }
  canActivate():boolean{
    if(this.userService.loggedIn() && this.ans == true){
      return true;
    } else{
      this.router.navigate(["user/login"]);
      return false;
    }
  }
  
}
