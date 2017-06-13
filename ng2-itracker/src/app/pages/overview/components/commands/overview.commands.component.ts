import { TrackerService } from './../../../../model/track/track.service';
import {Component} from '@angular/core';

@Component({
  selector: 'ui-command',
  templateUrl: './overview.commands.html',
})

export class Commands{
  constructor(private trackService : TrackerService){

  }

  public stopTimer(){
    this.trackService.stopTimer();
  }
}