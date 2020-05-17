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

  registerForm = new FormGroup({
    name: new FormControl("",[Validators.required]),
    email: new FormControl("",[Validators.required]),
    dob: new FormControl("",[Validators.required]),
    phone: new FormControl("",[Validators.required]),
    password: new FormControl("",[Validators.required])
  })
  constructor(private userService : UserService, private router: Router) { }

  ngOnInit(): void {
  }

  userRegister(){
    if(this.registerForm.valid){
      this.userService.register(this.registerForm.value).subscribe(res => {
        this.registerForm.reset();
        this.router.navigate(["user/login"]);
      });
    }
  }
}
