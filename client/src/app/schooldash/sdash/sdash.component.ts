import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user/service/user.service';

@Component({
  selector: 'app-sdash',
  templateUrl: './sdash.component.html',
  styleUrls: ['./sdash.component.scss']
})
export class SdashComponent implements OnInit {
  new : boolean = true;
  code : string;
  name;
  role;
  constructor(  public userService: UserService) { }

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
    $(document).ready(function() {
      $(".hamburger .hamburger__inner").click(function(){
        $(".wrapper").toggleClass("active")
      })
    });
  }

  buyp1(){
    // this.userService.sendmail();
    console.log("step 1");
    this.userService.checktype().subscribe(res =>{
      var idd = JSON.stringify(res._id);
      var em = JSON.stringify(res.email);
      var iddd = JSON.parse(idd);
      this.userService.couponcode(iddd,em);
    },err=>{
      console.log(err);
    })
  }

  activateuser(){
    this.userService.checktype().subscribe(res =>{
      var idd = JSON.stringify(res._id);
      var iddd = JSON.parse(idd);
      this.userService.comparecoupon(iddd,this.code);
    },err=>{
      console.log(err);
    })
  }
}
