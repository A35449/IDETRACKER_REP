import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { TreeModule } from 'ng2-tree';
import { Overview } from './overview.component';
import { Projects } from './components/overview-main/projects/overview.main.projects.component';
import { OverviewMain } from './components/overview-main/overview.main.component';
import { OverviewFeed } from '../overview/components/overview-feed/overview.feed.component';
import { OverviewMember } from '../overview/components/overview-member/overview.member.component';
import { OverviewTracker } from '../overview/components/overview-tracker/overview.tracker.component';
import { OverviewProgress } from '../overview/components/overview-progress/overview.progress.component';
import { Sprints } from './components/overview-main/sprints/overview.main.sprints.component';
import { routing } from './overview.routing';
import { SprintList } from './components/overview-main/sprints/list/overview.main.sprints.list.component';
import { Commands } from './components/commands/overview.commands.component';
import { ProjectTree } from './components/overview-main/project-tree/projectTree.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgaModule,
    TreeModule,
    routing
  ],
  declarations: [
    Overview,
    OverviewMain,
    OverviewFeed,
    OverviewMember,
    OverviewTracker,
    OverviewProgress,
    Projects,
    Sprints,
    Commands,
    SprintList,
    ProjectTree
  ]
})

export class OverviewModule {}