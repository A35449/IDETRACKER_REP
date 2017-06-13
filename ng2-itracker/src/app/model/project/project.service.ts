 import { ProjectModel } from './project.model';
import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProjectService {

    selectedProject : number = 1;

    selectedUpdated:EventEmitter<any> = new EventEmitter();

    constructor (private http: Http) {}

    public getProjects() {
        return this.http.get(`http://localhost:8150/api/projects`)
        .map((res:Response) => res.json())
    }

    public setSelectedProject(id:number){
        this.selectedProject = id;
        this.selectedUpdated.emit(id);
    }

    public getSelectedProject(){
        return this.selectedProject;
    }
}
