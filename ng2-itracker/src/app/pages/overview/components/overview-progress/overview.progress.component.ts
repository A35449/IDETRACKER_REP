import { BreakdownModel } from './../../../../model/breakdown/breakdown.model';
import { SprintService } from './../../../../model/sprint/sprint.service';
import { TaskModel } from './../../../../model/task/task.model';
import { TaskService } from './../../../../model/task/task.service';
import {Component, OnInit} from '@angular/core';

import {ProgressService} from './overview.progress.service';

import {BaThemeConfigProvider} from '../../../../theme';

@Component({
  selector: 'overview-progress',
  templateUrl: './overview.progress.html',
  providers: [ProgressService,BaThemeConfigProvider]
})

export class OverviewProgress{
  
  public selectedSprint : number = 1;

  private data = 
  {
        simpleLineOptions: {
          color: this._baConfig.get().colors.defaultText,
          fullWidth: true,
          height: '300px',
          chartPadding: {
            right: 40
          }
        },
        biLineOptions: {
          height: '300px',
          high: 3,
          low: -3,
          showArea: true,
          showLine: false,
          showPoint: false,
          fullWidth: true,
          axisX: {
            showGrid: false
          }
        },
  };

  private _simpleLineData = {
          labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
          series: [
            [20, 20, 12, 45, 50],
            [10, 45, 30, 14, 12],
            [34, 12, 12, 40, 50],
            [10, 43, 25, 22, 16],
            [3, 6, 30, 33, 43]
          ]
        }

  constructor(private progressJsService:ProgressService, private _baConfig:BaThemeConfigProvider, private _serviceSprint : SprintService) {
      this.initializeData();
      _serviceSprint.selectedEmitter.subscribe((id:number)=>{
         this.initializeData();
      });
  }

  ngOnInit() {

  }

  public initializeData(){
    this.selectedSprint = this._serviceSprint.getSelectedSprint();
    this._serviceSprint.getSprintBreakdown(this.selectedSprint,3).subscribe((_data:BreakdownModel) =>{
    this._simpleLineData["series"] = _data.series;
    this._simpleLineData["labels"] = _data.labels;
    this.data["simpleLineData"] = this._simpleLineData;
    console.log(this.data);
    });
  }

  getResponsive(padding, offset) {
    return this.progressJsService.getResponsive(padding, offset);
  }

}