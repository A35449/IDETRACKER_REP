import { OverviewTask } from './components/overview-task/overview.task.component';
import { OverviewMemberUser } from './components/overview-member/overview-member-user/overview.member.user.component';
import { SprintTree } from './components/overview-main/sprint-tree/sprintTree.component';
import { Routes, RouterModule }  from '@angular/router';

import { Overview } from './overview.component';
import { OverviewMain } from './components/overview-main/overview.main.component';
import { OverviewMember } from './components/overview-member/overview.member.component';
import { OverviewProgress} from './components/overview-progress/overview.progress.component';
import { ContextualTable } from '../tables/components/basicTables/components/contextualTable';
import { StripedTable } from '../tables/components/basicTables/components/stripedTable';
import { ProjectTree } from './components/overview-main/project-tree/projectTree.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Overview,
    children: [
      { path: 'overview-main', component: OverviewMain },
      { path: 'overview-member', component: OverviewMember },
      { path: 'overview-progress', component: OverviewProgress },
      { path: 'projecttree-view', component: ProjectTree },
      { path: 'sprinttree-view', component: SprintTree },
      { path: 'overview-member-user', component: OverviewMemberUser },
      { path: 'overview-task', component: OverviewTask }
    ]
  }
];

export const routing = RouterModule.forChild(routes);
