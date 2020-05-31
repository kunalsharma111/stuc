import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { ListofusersService } from '../service/listofusers.service';
import { UserService } from 'src/app/user/service/user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Listofusers } from '../model/listofusers';
@Component({
  selector: 'app-adminlist',
  templateUrl: './adminlist.component.html',
  styleUrls: ['./adminlist.component.scss']
})
export class AdminlistComponent implements OnInit {
  name;
  role;
  todaysdate = new Date();
  registerForm = new FormGroup({
    name: new FormControl("",[Validators.required]),
    email: new FormControl("",[Validators.required]),
    dob: new FormControl("",[Validators.required]),
    phone: new FormControl("",[Validators.required]),
    password: new FormControl("",[Validators.required]),
    registerdate: new FormControl(this.todaysdate),
    type: new FormControl("Admin"),
    status: new FormControl("Active")
  })
  s:boolean=false;
  s2:boolean=false; 
  tog(){
    if(this.s==false){
      this.s =  true;
    }
    else{
      this.s = false;
    }
  }

  list$ : Observable<Listofusers[]>; 

  constructor(private listofusersService : ListofusersService, private router : Router, public userService: UserService) { }

  ngOnInit(): void {
     // user details
     this.userService.checktype().subscribe(res =>{
      var n = JSON.stringify(res.name);
      var r = JSON.stringify(res.type);
      this.name = JSON.parse(n);
      this.role = JSON.parse(r);
    },err=>{
      console.log(err);
    })
    // navbar toggle
    this.list$ = this.listofusersService.getUsers();
    $(document).ready(function() {
      $(".hamburger .hamburger__inner").click(function(){
        $(".wrapper").toggleClass("active")
      })
    });
  }
  userRegister(){
    if(this.registerForm.valid){
      this.userService.register(this.registerForm.value).subscribe(res => {
        console.log(this.registerForm.value);
        this.registerForm.reset();
      });
    }
  }
}
