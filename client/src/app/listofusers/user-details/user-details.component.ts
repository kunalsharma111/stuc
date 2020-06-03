import { Component, OnInit , OnDestroy } from '@angular/core';
import { ListofusersService } from '../service/listofusers.service';
import { ActivatedRoute } from '@angular/router';
import { Listofusers } from '../model/listofusers';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/user/service/user.service';
import { Observable } from 'rxjs';
import * as $ from 'jquery';
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit, OnDestroy {
  name;
  role;
  id: string;
  listofusers: Listofusers;
  li : Listofusers;

  userSub$ : Subscription; 
  list$ : Subscription; 
  constructor(private  listofusersservice: ListofusersService, private router : ActivatedRoute, public userService: UserService) { }

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
   
    this.id = this.router.snapshot.paramMap.get("id");
    this.userSub$ = this.listofusersservice
    .getUser(this.id)
    .subscribe(listofusers =>{
      this.listofusers = listofusers;
    });
    this.list$ = this.listofusersservice.getteacherstudent(this.id).subscribe(li =>{
      this.li = li;
    });
     // navbar toggle
    $(document).ready(function() {
      $(".hamburger .hamburger__inner").click(function(){
        $(".wrapper").toggleClass("active")
      })
    });
  }

  ngOnDestroy(): void {
    this.userSub$.unsubscribe();
  }

}
