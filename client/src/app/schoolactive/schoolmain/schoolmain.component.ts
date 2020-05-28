import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user/service/user.service';

@Component({
  selector: 'app-schoolmain',
  templateUrl: './schoolmain.component.html',
  styleUrls: ['./schoolmain.component.scss']
})
export class SchoolmainComponent implements OnInit {

  constructor(public userService: UserService) { }

  ngOnInit(): void {
    $(document).ready(function() {
      $(".hamburger .hamburger__inner").click(function(){
        $(".wrapper").toggleClass("active")
      })
      
    });
  }

}