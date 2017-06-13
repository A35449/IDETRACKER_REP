import { SprintTree } from './../sprint-tree/sprintTree.component';
import { UserService } from './../../../../../model/user/user.service';
import { UserModel } from './../../../../../model/user/user.model';
import { ProjectModel } from './../../../../../model/project/project.model';
import { Component, OnInit} from '@angular/core';
import {TreeModel} from 'ng2-tree';
import {ProjectService} from '../../../../../model/project/project.service';

@Component({
  selector: 'projecttree-view',
  templateUrl: './projectTree.html'
})

export class ProjectTree{

  promiseList = this.getProjects();
  projectList: ProjectModel[];
  slots: number = 5;

  constructor(private _projectService:ProjectService, private _userService:UserService) {

  }

  ngOnInit(){ 
  }

  getProjects(){
      return this._projectService.getProjects();
  }

  selectProjectEvent(param) :void{
    this._projectService.setSelectedProject(param);
  }

  testMethod():void{
    alert(this._projectService.getSelectedProject());
  }
}
