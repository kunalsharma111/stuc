import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {
  private ROOT_URL = "http://localhost:4000/api/user";
  constructor(private http:HttpClient , private router : Router) { }
  register(user){
    return this.http.post<any>(`${this.ROOT_URL}/registerst`,user);
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
}
