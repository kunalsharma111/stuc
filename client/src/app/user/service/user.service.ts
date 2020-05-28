import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private ROOT_URL = "http://localhost:4000/api/user";
  constructor(private http:HttpClient , private router : Router) { }

  register(user){
    return this.http.post<any>(`${this.ROOT_URL}/register`,user);
  }

  login(user){
    return this.http.post<any>(`${this.ROOT_URL}/login`,user);
  }

  logout(){
    localStorage.removeItem("token");
    this.router.navigate(["/"]);
    window.location.reload();
  }

  loggedIn(){
    return !!localStorage.getItem("token");
  }

  checktype(){
    return this.http.get<any>(`${this.ROOT_URL}/cur`);
  }
  sendmail(){
    return this.http.get<any>(`${this.ROOT_URL}/sendmail`).subscribe(
      res =>{
      },err =>{
        console.log(err);
      }
    )
  }

  couponcode(idd,em){
    var otp = Math.floor(100000 + Math.random() * 900000);
    console.log(otp);
    let data = {id: idd,otp:otp};
    let emaildata = {email: em,otp:otp};
    console.log("step 2");
    return this.http.post<any>(`${this.ROOT_URL}/updatecoupon`,{params: data}).subscribe(
      res =>{
        this.http.post<any>(`${this.ROOT_URL}/sendmail`,{params: emaildata}).subscribe(
          res =>{
            console.log("mail send");
          },err =>{
            console.log(err);
          }
        )
      },err =>{
        console.log(err);
      }
    )
  }

}
