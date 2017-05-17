import {Component, OnInit} from '@angular/core';

import {ProgressService} from './overview.progress.service';

import {BaThemeConfigProvider} from '../../../../theme';

@Component({
  selector: 'overview-progress',
  templateUrl: './overview.progress.html',
  providers: [ProgressService,BaThemeConfigProvider]
})

export class OverviewProgress{
  data:any;

  constructor(private progressJsService:ProgressService) {
  }

  ngOnInit() {
    this.data = this.progressJsService.getAll();
  }

  getResponsive(padding, offset) {
    return this.progressJsService.getResponsive(padding, offset);
  }
}