import { TaskModel } from './task.model';

import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TaskService {
    
    private endpoint:string = `http://localhost:8150/api/tasks`;
    tasks : TaskModel[];

    public selectedTask : number = 1;
    public taskEmmiter : EventEmitter<any> = new EventEmitter();

    constructor (private http: Http) { 
    }

    public setSelectedTask(id : number){
        this.selectedTask = id;
        this.taskEmmiter.emit(id);
    }

    public getTasks(){
            return this.http.get(this.endpoint)
        .map((res:Response) => res.json());
    }

    public getTask(id: number){
            return this.http.get(this.endpoint + `/` + id)
        .map((res:Response) => res.json());
    }

    public getTasksFromUser(userId: number){
            return this.http.get(this.endpoint + `/user/` + userId)
        .map((res:Response) => res.json());
    }

    public getTasksFromSprint(userId: number , sprintId : number){
            return this.http.get(this.endpoint + `/user/` + userId + `/sprint/` + sprintId)
        .map((res:Response) => res.json());
    }
}
