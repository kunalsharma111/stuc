import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../service/user.service';

@Injectable({
  providedIn: 'root'
})
export class TypeGuard implements CanActivate {
  constructor(private userService: UserService ,private router:Router){}
  canActivate():  boolean  {
    if(this.userService.checktype()){
      return true;
    } else{
      this.router.navigate(["user/login"]);
      return false;
    }
  }
  
}
