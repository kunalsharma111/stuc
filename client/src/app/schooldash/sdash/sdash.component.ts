import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user/service/user.service';

@Component({
  selector: 'app-sdash',
  templateUrl: './sdash.component.html',
  styleUrls: ['./sdash.component.scss']
})
export class SdashComponent implements OnInit {
  new : boolean = true;
  constructor(  public userService: UserService) { }

  ngOnInit(): void {
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
      const idd = JSON.stringify(res._id);
      this.userService.couponcode(idd);
    },err=>{
      console.log(err);
    })
  }

}
