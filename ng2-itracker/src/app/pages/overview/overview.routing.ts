import { Routes, RouterModule }  from '@angular/router';

import { Overview } from './overview.component';
import { OverviewMain } from './components/overview-main/overview.main.component';
import { OverviewFeed } from './components/overview-feed/overview.feed.component';
import { OverviewMember } from './components/overview-member/overview.member.component';
import { OverviewTracker } from './components/overview-tracker/overview.tracker.component';
import { OverviewProgress} from './components/overview-progress/overview.progress.component';
import { Projects } from './components/overview-main/projects/overview.main.projects.component';
import { Sprints } from './components/overview-main/sprints/overview.main.sprints.component';
import { ContextualTable } from '../tables/components/basicTables/components/contextualTable';
import { StripedTable } from '../tables/components/basicTables/components/stripedTable';
import { ProjectTree } from './components/overview-main/project-tree/projectTree.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Overview,
    children: [
      { path: 'projects', component: Projects },
      { path: 'sprints', component: Sprints },
      { path: 'overview-main', component: OverviewMain },
      { path: 'overview-feed', component: OverviewFeed },
      { path: 'overview-member', component: OverviewMember },
      { path: 'overview-tracker', component: OverviewTracker },
      { path: 'overview-progress', component: OverviewProgress },
      { path: 'projecttree-view', component: ProjectTree }
    ]
  }
];

export const routing = RouterModule.forChild(routes);
