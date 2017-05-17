import { SprintModel } from './sprint.model';
import { ProjectModel } from './project.model';
import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SprintService {

    constructor (
        private http: Http
    ) {}

    public getSprints(){

            return this.http.get(`http://localhost:8150/api/sprints`)
        .map((res:Response) => res.json());
    }
}
