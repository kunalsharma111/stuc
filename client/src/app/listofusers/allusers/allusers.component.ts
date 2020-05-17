import { Component, OnInit } from '@angular/core';
import { ListofusersService } from '../service/listofusers.service';
import { Observable } from 'rxjs';
import { ListofusersModule } from '../listofusers.module';
import { Listofusers } from '../model/listofusers';
import { UserService } from 'src/app/user/service/user.service';
@Component({
  selector: 'app-allusers',
  templateUrl: './allusers.component.html',
  styleUrls: ['./allusers.component.scss']
})
export class AllusersComponent implements OnInit {

  list$ : Observable<Listofusers[]>;
  
  constructor(private listofusersService : ListofusersService, public userService: UserService) { }

  ngOnInit(): void {
    this.list$ = this.listofusersService.getUsers();
  }

}
