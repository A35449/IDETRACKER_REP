import {Component, OnInit} from '@angular/core';


import { ProjectModel } from '../../../../../model/project/project.model';

import { ProjectService } from '../../../../../model/project/project.service';

@Component({
  selector: 'projects',
  templateUrl: './overview.main.projects.html',
  providers: [ProjectService]
})

export class Projects implements OnInit{

  projectList : ProjectModel[] = [];
  
  constructor(private projectService : ProjectService){}
  
  ngOnInit(){
    this.projectService.getProjects().subscribe( (data : ProjectModel[] ) => { this.projectList = data;  console.log(data);});
  }

}