import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { List } from '../model/list';
@Injectable({
  providedIn: 'root'
})
export class SchoolService {
  private ROOT_URL = "http://localhost:4000/api/user";
  private ROOT_URLL = "http://localhost:4000/api/school";
  private httpOptions = {
    headers: new HttpHeaders()
    .set("Content-Type","application/json")
    .set("auth-token",localStorage.getItem("token"))
  };
  constructor(private http:HttpClient , private router : Router) { }
  register(user){
    return this.http.post<any>(`${this.ROOT_URL}/registerst`,user,this.httpOptions);
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
    return this.http.get<any>(`${this.ROOT_URL}/cur`,this.httpOptions);
  }
  getUsers(sn): Observable <List[]>{
    return this.http.get<List[]>(`${this.ROOT_URLL}/getusers/${sn}`,this.httpOptions);
  }

  getUser(id: string){
    return this.http.get<List>(`${this.ROOT_URLL}/${id}`,this.httpOptions);
  }
}
