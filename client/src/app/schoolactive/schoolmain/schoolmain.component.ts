import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user/service/user.service';

@Component({
  selector: 'app-schoolmain',
  templateUrl: './schoolmain.component.html',
  styleUrls: ['./schoolmain.component.scss']
})
export class SchoolmainComponent implements OnInit {
  name;
  role;
  constructor(public userService: UserService) { }

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

}
