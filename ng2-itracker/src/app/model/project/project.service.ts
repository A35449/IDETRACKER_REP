 import { ProjectModel } from './project.model';
import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProjectService {

    constructor (
        private http: Http
    ) {}

    public getProjects(){

            return this.http.get(`http://localhost:8150/api/projects`)
        .map((res:Response) => res.json());
    }
}
