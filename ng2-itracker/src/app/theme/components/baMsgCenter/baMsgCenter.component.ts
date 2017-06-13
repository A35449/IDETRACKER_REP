import { OverviewTracker } from './../../../pages/overview/components/overview-tracker/overview.tracker.component';
import { TrackerRecordModel } from './../../../model/track/track.model';
import { TrackerService } from './../../../model/track/track.service';
import {Component} from '@angular/core';

import {BaMsgCenterService} from './baMsgCenter.service';

@Component({
  selector: 'ba-msg-center',
  providers: [BaMsgCenterService],
  styleUrls: ['./baMsgCenter.scss'],
  templateUrl: './baMsgCenter.html'
})
export class BaMsgCenter {

  public notifications:Array<Object>;
  public messages:Array<Object>;

  constructor(private _baMsgCenterService:BaMsgCenterService, private _trackerService: TrackerService) {
    this.notifications = this._baMsgCenterService.getNotifications();
    this.messages = this._baMsgCenterService.getMessages();
  }

}
