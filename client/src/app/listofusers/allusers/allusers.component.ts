import { Component, OnInit } from '@angular/core';
import { ListofusersService } from '../service/listofusers.service';
import { UserService } from 'src/app/user/service/user.service';
import * as $ from 'jquery';
@Component({
  selector: 'app-allusers',
  templateUrl: './allusers.component.html',
  styleUrls: ['./allusers.component.scss']
})
export class AllusersComponent implements OnInit {
 
  
  constructor( public userService: UserService) { }

  ngOnInit(): void {
    $(document).ready(function() {
      $(".hamburger .hamburger__inner").click(function(){
        $(".wrapper").toggleClass("active")
      })
    });
     
  }

}
