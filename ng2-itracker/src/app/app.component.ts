import { Subscription } from 'rxjs/Rx';



import { Component, ViewContainerRef } from '@angular/core';

import { GlobalState } from './global.state';
import { BaImageLoaderService, BaThemePreloader, BaThemeSpinner } from './theme/services';
import { BaThemeConfig } from './theme/theme.config';
import { layoutPaths } from './theme/theme.constants';

import 'style-loader!./app.scss';
import 'style-loader!./theme/initial.scss';

import {ProjectService} from './model/project/project.service';
import {UserService} from './model/user/user.service';
import {SprintService} from './model/sprint/sprint.service';
import { TaskService } from './model/task/task.service';
import { EventService } from './model/event/event.service';
import { TrackerService } from './model/track/track.service';
import { TimerObservable } from "rxjs/observable/TimerObservable";

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  template: `
    <main [ngClass]="{'menu-collapsed': isMenuCollapsed}" baThemeRun>
      <div class="additional-bg"></div>
      <router-outlet></router-outlet>
    </main>
  `,
  providers : [ProjectService, UserService, SprintService, TaskService,EventService,TrackerService]
})

export class App {


  isMenuCollapsed: boolean = false;

  constructor(private _state: GlobalState,
              private _imageLoader: BaImageLoaderService,
              private _spinner: BaThemeSpinner,
              private viewContainerRef: ViewContainerRef,
              private themeConfig: BaThemeConfig,
              private _trackerService : TrackerService) {

    themeConfig.config();

    this._loadImages();

    this._state.subscribe('menu.isCollapsed', (isCollapsed) => {
      this.isMenuCollapsed = isCollapsed;
    });
  }

  public ngAfterViewInit(): void {
    // hide spinner once all loaders are completed
    BaThemePreloader.load().then((values) => {
      this._spinner.hide();
    });
  }

  private _loadImages(): void {
    // register some loaders
    BaThemePreloader.registerLoader(this._imageLoader.load(layoutPaths.images.root + 'sky-bg.jpg'));
  }
}
