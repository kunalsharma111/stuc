import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user/service/user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SchoolService } from '../service/school.service';
import { List } from '../model/list';
@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss']
})
export class TeachersComponent implements OnInit {
  name;
  role;
  schoolname;
  todaysdate = new Date();
  registerForm = new FormGroup({
    name: new FormControl("",[Validators.required]),
    email: new FormControl("",[Validators.required]),
    dob: new FormControl("",[Validators.required]),
    phone: new FormControl("",[Validators.required]),
    password: new FormControl("",[Validators.required]),
    registerdate: new FormControl(this.todaysdate),
    type: new FormControl("Teacher"),
    status: new FormControl("Active"),
    schoolname: new FormControl("")
  })
  list$ : Observable<List[]>; 
  constructor(public userService: UserService ,public schoolService : SchoolService) { }

  ngOnInit(): void {
    this.list$ = this.schoolService.getUsers();
     // user details
     this.userService.checktype().subscribe(res =>{
      var n = JSON.stringify(res.name);
      var r = JSON.stringify(res.type);
      this.name = JSON.parse(n);
      this.role = JSON.parse(r);
      this.schoolname = this.name;
    },err=>{
      console.log(err);
    })
    // navbar toggle
    $(document).ready(function() {
      $(".hamburger .hamburger__inner").click(function(){
        $(".wrapper").toggleClass("active")
      })
      
    });
  }
  userRegister(){
    if(this.registerForm.valid){
      this.schoolService.register(this.registerForm.value).subscribe(res => {
        console.log(this.registerForm.value);
        this.registerForm.reset();
      });
    }
  }
}
