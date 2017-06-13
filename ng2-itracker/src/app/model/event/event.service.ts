
import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class EventService {

    selectedProject : number = 1;
    private endpoint:string = `http://localhost:8150/api/events`;
    constructor (private http: Http) {}

    public getEvents() {
        return this.http.get(this.endpoint)
        .map((res:Response) => res.json())
    }

    public getEventsByUser(id:number){
        return this.http.get(this.endpoint +`/` + id)
        .map((res:Response) => res.json())
    }
}
