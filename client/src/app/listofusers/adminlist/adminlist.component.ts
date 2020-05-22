import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { ListofusersService } from '../service/listofusers.service';
import { UserService } from 'src/app/user/service/user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-adminlist',
  templateUrl: './adminlist.component.html',
  styleUrls: ['./adminlist.component.scss']
})
export class AdminlistComponent implements OnInit {

  todaysdate = new Date();
  registerForm = new FormGroup({
    name: new FormControl("",[Validators.required]),
    email: new FormControl("",[Validators.required]),
    dob: new FormControl("",[Validators.required]),
    phone: new FormControl("",[Validators.required]),
    password: new FormControl("",[Validators.required]),
    registerdate: new FormControl(this.todaysdate),
    type: new FormControl("Admin")
  })
  constructor(private  listofusersservice: ListofusersService, private router : Router, public userService: UserService) { }

  ngOnInit(): void {
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
        this.router.navigate(["user/login"]);
      });
    }
  }
}
