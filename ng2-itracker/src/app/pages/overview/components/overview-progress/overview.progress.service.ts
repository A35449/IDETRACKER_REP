import {Injectable} from '@angular/core';

import {BaThemeConfigProvider} from '../../../../theme';

import 'style-loader!./overview.progress.scss';

@Injectable()
export class ProgressService {

  private _data = {
    simpleLineOptions: {
      color: this._baConfig.get().colors.defaultText,
      fullWidth: true,
      height: '300px',
      chartPadding: {
        right: 40
      }
    },
    simpleLineData: {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
      series: [
        [5, 4, 3, 1, 0],
        [5, 5, 4]
      ]
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
    }
  };

  constructor(private _baConfig:BaThemeConfigProvider) {
  }

  public getAll() {
    return this._data;
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
}
