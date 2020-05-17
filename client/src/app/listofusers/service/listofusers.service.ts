import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Listofusers } from '../model/listofusers';

@Injectable({
  providedIn: 'root'
})
export class ListofusersService {
  private ROOT_URL = "http://localhost:4000/api/user/getusers";
  private httpOptions = {
    headers: new HttpHeaders()
    .set("Content-Type","application/json")
    .set("auth-token",localStorage.getItem("token"))
  };

  constructor(private http: HttpClient) { }

  getUsers(): Observable <Listofusers[]>{
    return this.http.get<Listofusers[]>(this.ROOT_URL,this.httpOptions);
  }

  getUser(id: string){
    return this.http.get<Listofusers>(`${this.ROOT_URL}/${id}`,this.httpOptions);
  }

}
