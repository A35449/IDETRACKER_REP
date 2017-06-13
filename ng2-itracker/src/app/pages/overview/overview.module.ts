


import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { TreeModule } from 'ng2-tree';
import { Overview } from './overview.component';
import { OverviewMain } from './components/overview-main/overview.main.component';
import { OverviewMember } from '../overview/components/overview-member/overview.member.component';
import { OverviewMemberUser } from './components/overview-member/overview-member-user/overview.member.user.component';
import { OverviewProgress } from '../overview/components/overview-progress/overview.progress.component';
import { routing } from './overview.routing';
import { ProjectTree } from './components/overview-main/project-tree/projectTree.component';
import { SprintTree } from './components/overview-main/sprint-tree/sprintTree.component';
import { OverviewTask } from './components/overview-task/overview.task.component';


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
    OverviewMemberUser,
    OverviewMember,
    OverviewProgress,
    ProjectTree,
    SprintTree,
    OverviewTask
  ]
})

export class OverviewModule {}