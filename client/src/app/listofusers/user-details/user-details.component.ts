import { Component, OnInit , OnDestroy } from '@angular/core';
import { ListofusersService } from '../service/listofusers.service';
import { ActivatedRoute } from '@angular/router';
import { Listofusers } from '../model/listofusers';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/user/service/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit, OnDestroy {

  id: string;
  listofusers: Listofusers;

  userSub$ : Subscription; 
  
  constructor(private  listofusersservice: ListofusersService, private router : ActivatedRoute, public userService: UserService) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.paramMap.get("id");
    this.userSub$ = this.listofusersservice
    .getUser(this.id)
    .subscribe(listofusers =>{
      this.listofusers = listofusers;
    });
  }

  ngOnDestroy(): void {
    this.userSub$.unsubscribe();
  }

}
