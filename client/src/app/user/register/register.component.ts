import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  todaysdate = new Date();
  registerForm = new FormGroup({
    name: new FormControl("",[Validators.required]),
    email: new FormControl("",[Validators.required]),
    dob: new FormControl("",[Validators.required]),
    phone: new FormControl("",[Validators.required]),
    password: new FormControl("",[Validators.required]),
    registerdate: new FormControl(this.todaysdate),
    type: new FormControl("User")
  })
  constructor(private userService : UserService, private router: Router) { }

  ngOnInit(): void {
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
