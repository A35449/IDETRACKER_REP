import { Subscription } from 'rxjs/Rx';
import { TrackerRecordModel } from './track.model';
import { TimerObservable } from 'rxjs/observable/TimerObservable';
import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";

@Injectable()
export class TrackerService {

    selectedProject : number = 1;
    runningTasks : number[] = [1,2,3];

    public runningTimer : number = 0;
    //timerEvent : TimerObservable;
    public subscription: Subscription;
    public endpoint: string = `http://localhost:8150/api/tracks/`;

    public hdrs : Headers;
    constructor (private http: Http) {
    }

    public updateTimer(tick : number){
        this.runningTimer = tick;
    }


    public startTimer(){
        // let timerEvent = TimerObservable.create(0,1000);
        // this.subscription = timerEvent.subscribe(t => {
        //     console.log(t);
        //     this.runningTimer += t;
        // });
    }

    public stopTimer(){
        this.subscription.unsubscribe();
    }

    public getTrackers() {
        return this.http.get(`http://localhost:8150/api/tracks`)
        .map((res:Response) => res.json());
    }

    public getTrackersByUser(id:number){
         return this.http.get(`http://localhost:8150/api/tracks/user/` + id)
        .map((res:Response) => res.json());
    }

    public getTrackerById(id : number) {
        return this.http.get(`http://localhost:8150/api/tracks/` + id)
        .map((res:Response) => res.json());
    }

    public getRunningTasks() {
        return this.http.get(`http://localhost:8150/api/tracks`)
        .map((res:Response) => res.json());
    }
    
    public getRunningTrackers() {
        return this.runningTasks;
    }

    public updateTrack(id:number){
            console.log("entrei");
            var bodyString = JSON.stringify({id: 1});
            var headers = new Headers({'Content-Type' : 'application/json'});
            var options = new RequestOptions({headers: headers }); 

            return this.http.post(this.endpoint + id , bodyString, options)
                            .map((res:Response) => res.json());
        }
}
