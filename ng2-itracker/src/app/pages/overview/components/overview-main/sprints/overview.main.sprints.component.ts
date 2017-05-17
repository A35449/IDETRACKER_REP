import {Component, OnInit} from '@angular/core';
import {SprintModel} from '../../../../../model/sprint/sprint.model';
import {ProjectModel} from '../../../../../model/sprint/project.model';
import {SprintService} from '../../../../../model/sprint/sprint.service';

@Component({
  selector: 'sprints',
  templateUrl: './overview.main.sprints.html',
  providers: [SprintService]
})

export class Sprints implements OnInit{

  sprintList : SprintModel[] = [];
  
  constructor(private sprintService : SprintService){}
  
  ngOnInit(){
    this.sprintService.getSprints().subscribe( (data : SprintModel[] ) => { this.sprintList = data;  console.log(data);});
  }
}