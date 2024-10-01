import { Routes } from '@angular/router';
import { LEARNING_ROUTES } from './learning/routes';
import { HomeComponent } from './learning/pages/home.component';
import { DashboardComponent } from './learning/pages/dashboard.component';
import { GolfStore } from '@shared/golf.store';

export const routes: Routes = [
  {
    path: '',
    providers: [GolfStore],
    component: HomeComponent,
    pathMatch: 'prefix',
    children: [
      ...LEARNING_ROUTES,
      {
        path: 'halloween',
        loadChildren: () =>
          import('./halloween/halloween.routes').then(
            (r) => r.HALLOWEEN_ROUTES
          ),
      },
      {
        path: '**',
        component: DashboardComponent,
      },
    ],
  },
];
