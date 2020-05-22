import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Observable } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Listofusers } from '../model/listofusers';
import { ListofusersService } from '../service/listofusers.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user/service/user.service';
@Component({
  selector: 'app-schoollist',
  templateUrl: './schoollist.component.html',
  styleUrls: ['./schoollist.component.scss']
})
export class SchoollistComponent implements OnInit {
  todaysdate = new Date();
  registerForm = new FormGroup({
    name: new FormControl("",[Validators.required]),
    email: new FormControl("",[Validators.required]),
    dob: new FormControl("",[Validators.required]),
    phone: new FormControl("",[Validators.required]),
    password: new FormControl("",[Validators.required]),
    registerdate: new FormControl(this.todaysdate),
    type: new FormControl("School"),
    status: new FormControl("Inactive")
  })
  s:boolean=false;
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
