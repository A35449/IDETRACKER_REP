import { EventModel } from './../../../model/event/event.model';
import { EventService } from './../../../model/event/event.service';

import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'ba-events',
  templateUrl: './baEvents.html'
})

export class BaEvents{

  events:EventModel[];

  constructor(private _eventService: EventService){

  }

  ngOnInit(){
      this._eventService.getEvents().subscribe((data: EventModel[]) => {
            this.events = data;
      });
  }
}