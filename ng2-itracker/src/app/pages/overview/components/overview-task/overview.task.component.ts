import { Commands } from './../commands/overview.commands.component';
import { SprintService } from './../../../../model/sprint/sprint.service';
import { Http } from '@angular/http';
import { TaskService } from './../../../../model/task/task.service';
import { TaskState } from './../../../../model/task/task.state';
import { TaskModel } from './../../../../model/task/task.model';
import {Component,OnInit} from '@angular/core';

@Component({
  selector: 'overview-task',
  templateUrl: './overview.task.html',
  styles: [`
      .baTracker-table tr{
        border: 1px solid black;
      }
      .baTracker-table th{
        border-bottom: 1px solid black;
        font-weight: bold;
      }

      .custom-table-size{
        width:400px;
      }
      
      .center td , th , div{
        text-align:center;
      }

     .center td {
        text-align:center;
      }
      .align-right {
          text-align:right !important;
      }
  `]
})


export class OverviewTask {

    private upcommingTasks : TaskModel[];
    private completedTasks : TaskModel[];
    private suspendedTasks : TaskModel[];
    private processingTasks : TaskModel[];
    private hasElements = false;
    private selectedUser = 3;
    private selectedSprint = 1;

    constructor (private http: Http, private _taskService: TaskService, private _sprintService: SprintService ) {
        this.initializeData();
        _sprintService.selectedEmitter.subscribe((id : number) => {
            this.initializeData();
        });
    }

    ngOnInit(){

    }

    initializeData(){
        this.selectedSprint = this._sprintService.getSelectedSprint();
        this._taskService.getTasksFromSprint(this.selectedUser,this.selectedSprint).subscribe((data : TaskModel[]) => {
            this.completedTasks = data.filter(task => task.idTaskState  == TaskState.Completed);
            this.suspendedTasks = data.filter(task => task.idTaskState  == TaskState.Suspended);
            this.processingTasks = data.filter(task => task.idTaskState  == TaskState.Processing);
            this.upcommingTasks = data.filter(task => task.idTaskState  == TaskState.Upcomming);
        });
    }

    public TaskOnClick(id:number) : void{
        alert(id);
        this._taskService.setSelectedTask(id);
    }

    public hasTasks(idState): boolean{
        switch(idState) { 
            case 1: { 
                return this.completedTasks.length > 0; 
            } 
            case 2: { 
                //statements; 
                return this.suspendedTasks.length > 0; 
            }
            case 3: { 
                return this.processingTasks.length > 0; 
            }
            case 4: { 
                return this.upcommingTasks.length > 0; 
            }   
            default: { 
                //statements; 
                break; 
            } 
        } 
    }
}

