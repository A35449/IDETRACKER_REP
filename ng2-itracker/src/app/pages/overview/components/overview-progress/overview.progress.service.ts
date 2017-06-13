import { BreakdownModel } from './../../../../model/breakdown/breakdown.model';
import { SprintService } from './../../../../model/sprint/sprint.service';
import { TaskModel } from './../../../../model/task/task.model';
import { TaskService } from './../../../../model/task/task.service';
import {Injectable, OnInit} from '@angular/core';

import {BaThemeConfigProvider} from '../../../../theme';

import 'style-loader!./overview.progress.scss';

@Injectable()
export class ProgressService {

  constructor(private _baConfig:BaThemeConfigProvider, private _serviceSprint:SprintService) {
  }
  
   public getResponsive(padding, offset) {
    return [
      ['screen and (min-width: 1550px)', {
        chartPadding: padding,
        labelOffset: offset,
        labelDirection: 'explode',
        labelInterpolationFnc: function (value) {
          return value;
        }
      }],
      ['screen and (max-width: 1200px)', {
        chartPadding: padding,
        labelOffset: offset,
        labelDirection: 'explode',
        labelInterpolationFnc: function (value) {
          return value;
        }
      }],
      ['screen and (max-width: 600px)', {
        chartPadding: 0,
        labelOffset: 0,
        labelInterpolationFnc: function (value) {
          return value[0];
        }
      }]
    ];
  }

   public initializeData(data:TaskModel[]){}
}
