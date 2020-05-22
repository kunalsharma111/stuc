import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  todaysdate = new Date();
  registerForm = new FormGroup({
    name: new FormControl("",[Validators.required]),
    email: new FormControl("",[Validators.required]),
    dob: new FormControl("",[Validators.required]),
    phone: new FormControl("",[Validators.required]),
    password: new FormControl("",[Validators.required]),
    registerdate: new FormControl(this.todaysdate),
    type: new FormControl("School")
  })
  loginForm = new FormGroup({
    email: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required])
  });

  constructor(private userService : UserService,private router: Router) { 
    console.log("reloaded");
  }

  ngOnInit(): void {
    
    let switchCtn = document.querySelector("#switch-cnt");
let switchC1 = document.querySelector("#switch-c1");
let switchC2 = document.querySelector("#switch-c2");
let switchCircle = document.querySelectorAll(".switch__circle");
let switchBtn = document.querySelectorAll(".switch-btn");
let aContainer = document.querySelector("#a-container");
let bContainer = document.querySelector("#b-container");
let allButtons = document.querySelectorAll(".submit");

let getButtons = (e) => e.preventDefault()

let changeForm = (e) => {

    switchCtn.classList.add("is-gx");
    setTimeout(function(){
        switchCtn.classList.remove("is-gx");
    }, 1500)

    switchCtn.classList.toggle("is-txr");
    switchCircle[0].classList.toggle("is-txr");
    switchCircle[1].classList.toggle("is-txr");

    switchC1.classList.toggle("is-hidden");
    switchC2.classList.toggle("is-hidden");
    aContainer.classList.toggle("is-txl");
    bContainer.classList.toggle("is-txl");
    bContainer.classList.toggle("is-z200");
}

let mainF = (e) => {
    for (var i = 0; i < allButtons.length; i++)
        allButtons[i].addEventListener("click", getButtons );
    for (var i = 0; i < switchBtn.length; i++)
        switchBtn[i].addEventListener("click", changeForm)
}

window.addEventListener("load", mainF);

  }

  userLogin(){
    if(this.loginForm.valid){
      this.userService.login(this.loginForm.value).subscribe(
        res =>{
        if(res.role == "Admin"){
        localStorage.setItem("token",res.token);
        this.loginForm.reset();
        this.router.navigate(["/listofusers"]);
        }
        else{
          localStorage.setItem("token",res.token);
          this.loginForm.reset();
          this.router.navigate(["/school"]);    
        }
      },
      err => {
        console.log(err);
      }
      )
    }
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
