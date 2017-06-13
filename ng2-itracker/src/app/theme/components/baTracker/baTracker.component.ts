
import {Http, Response, RequestOptions, Headers} from '@angular/http';
import { Commands } from './../../../pages/overview/components/commands/overview.commands.component';
import { Subscription } from 'rxjs/Rx';
import { TimerObservable } from 'rxjs/observable/TimerObservable';
import { TrackerService } from './../../../model/track/track.service';
import { TrackerRecordModel } from './../../../model/track/track.model';

import {Component, OnInit, OnDestroy} from '@angular/core';

@Component({
  selector: 'ba-tracker',
  templateUrl: './baTracker.html',
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
      
      .center td , th, div{
        text-align:center;
      }
  `],
})

export class BaTracker{

  tracks : TrackerRecordModel[] = [];
  _total : number;
  runningTracks : TrackerRecordModel[] = [];
  runningTimer : string;
  runTimeSeconds : number = 1;
  isRunning : boolean = true;
  public subscription: Subscription;

  constructor(private trackRecordService : TrackerService, private http:Http){
    var totalAux = 0;
    trackRecordService.getTrackersByUser(3).subscribe((data:TrackerRecordModel[]) => {
      this.tracks = data.filter(x => x.isRun == false);
      
      for(let tk of data){
        totalAux += tk.activityTotal;
      }
      this._total = (new Date(totalAux)).getHours();
      this.runningTracks = data.filter(x => x.isRun == true);
      this.runTimeSeconds = this.runningTracks[0].activityTotal;
    });

    let timerEvent = TimerObservable.create(0,1000);
    trackRecordService.subscription = timerEvent.subscribe(t => {
        trackRecordService.runningTimer = this.runTimeSeconds + t;
        var timerObj  = this.convertMS(trackRecordService.runningTimer);
        this.runningTimer = timerObj.h + ":" + timerObj.m + ":" + timerObj.s;
    });
  }

  ngOnInit(){
   // this.trackRecordService.updateTrack(1).subscribe(() => {});
  }

  public getRunningTasks(runIds){
    var runningTracksIds = [1];
    this.trackRecordService.getTrackers().subscribe(
      (data:TrackerRecordModel[]) => 
      {
        this.runningTracks = data.filter(x => runIds.some( y => y == x.idTask));
        this.runTimeSeconds = this.runningTracks[0].activityTotal; 
      }
    );
  }

  public convertMS(m) {
    var ms = m * 1000;
    var d, h, m, s;
    s = Math.floor(ms / 1000);
    m = Math.floor(s / 60);
    s = s % 60;
    h = Math.floor(m / 60);
    m = m % 60;
    d = Math.floor(h / 24);
    h = h % 24;
    return { d: d, h: h, m: m, s: s };
  };

  public clickevent(){
    console.log("click");
  }

  public trackMeEvent(){
    console.log("trackme");
  }
}