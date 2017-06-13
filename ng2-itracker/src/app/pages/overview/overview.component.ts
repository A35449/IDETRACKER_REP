import { OverviewTask } from './components/overview-task/overview.task.component';
import {Component} from '@angular/core';

@Component({
  selector: 'overview',
  templateUrl: './overview.html',
})

export class Overview {
  selectedSp : number = 1;

  constructor(){

  }
}