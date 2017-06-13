import { UserModel } from './../../../../../model/user/user.model';
import { Component, OnInit, Input, SimpleChanges } from '@angular/core';


@Component({
  selector: 'overview-member-user',
  templateUrl: './overview.member.user.html'
})

export class OverviewMemberUser{

  @Input() selectedUser:UserModel;
  
  constructor(){
  }

  ngOnInit(){

  }

  ngOnChanges(changes : SimpleChanges){
      
    }
}