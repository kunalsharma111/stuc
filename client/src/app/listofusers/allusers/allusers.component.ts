import { Component, OnInit } from '@angular/core';
import { ListofusersService } from '../service/listofusers.service';
import { Observable } from 'rxjs';
import { ListofusersModule } from '../listofusers.module';
import { Listofusers } from '../model/listofusers';
import { UserService } from 'src/app/user/service/user.service';
import * as $ from 'jquery';
@Component({
  selector: 'app-allusers',
  templateUrl: './allusers.component.html',
  styleUrls: ['./allusers.component.scss']
})
export class AllusersComponent implements OnInit {
  s:boolean=false;
  s2:boolean=false; 
  tog(){
    if(this.s==false){
      this.s =  true;
    }
    else{
      this.s = false;
    }
  }
  tog2(){
    if(this.s2==false){
      this.s2 =  true;
    }
    else{
      this.s2 = false;
    }
  }
  list$ : Observable<Listofusers[]>;
  
  constructor(private listofusersService : ListofusersService, public userService: UserService) { }

  ngOnInit(): void {
    this.list$ = this.listofusersService.getUsers();
    $(document).ready(function() {
      $('#sidebarCollapse').on('click', function() {
        $('#sidebar').toggleClass('active');
        $('#im').toggleClass('pk');
      });
      $(window).on('load resize', function() {
        $('#sidebar').toggleClass('active', $(window).width() < 1080);
        
      });
      $('#sidebarOpen').on('click', function() {
        $('#sidebar').toggleClass();
        $('#im').toggleClass('pkk');
      });
    });
     
  }

}
