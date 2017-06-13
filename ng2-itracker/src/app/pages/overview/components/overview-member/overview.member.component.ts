import { ProjectService } from './../../../../model/project/project.service';
import { UserService } from './../../../../model/user/user.service';
import { UserModel } from './../../../../model/user/user.model';
import { ProjectModel } from './../../../../model/project/project.model';
import { Component, OnInit, Input, SimpleChanges } from '@angular/core';


@Component({
  selector: 'overview-member',
  templateUrl: './overview.member.html'
})

export class OverviewMember{

  userList: UserModel[] = [];
  
  constructor(private _service:UserService, private _project:ProjectService){}

  ngOnInit(){
      this._service.getUsersFromProject(this._project.selectedProject).subscribe((data:UserModel[])=>{
        if(data != undefined && data != null)
        this.userList = data;
      });
  }
}