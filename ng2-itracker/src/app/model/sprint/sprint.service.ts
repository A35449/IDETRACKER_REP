import { SprintModel } from './sprint.model';
import { ProjectModel } from './project.model';
import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SprintService {

    public selectedEmitter: EventEmitter<any> = new EventEmitter();
    public selectedSprint : number = 1;
    constructor (
        private http: Http
    ) {}

    public setSelectedSprint(selected : number){
        this.selectedSprint = selected;
        this.selectedEmitter.emit(selected);
    }

    public getSelectedSprint(){
        return this.selectedSprint;
    }

    public getSprints(){

            return this.http.get(`http://localhost:8150/api/sprints`)
        .map((res:Response) => res.json());
    }

     public getSprintFromProject(id:number){
            return this.http.get(`http://localhost:8150/api/sprints/idProject/` + id)
        .map((res:Response) => res.json());
    }

    public getSprintBreakdown(idSprint : number, idUser : number){
         return this.http.get(`http://localhost:8150/api/sprints/` + idSprint + `/user/` + idUser + `/breakdown`)
        .map((res:Response) => res.json());
    }
}
