import { Routes } from '@angular/router';
import { LearningComponent } from './learning.component';
import { GolfComponent } from './pages/golf/golf.component';
import { GolfStore } from '../shared/golf.store';

export const LEARNING_ROUTES: Routes = [
  {
    path: 'learning',
    component: LearningComponent,
    children: [{ path: 'golf', component: GolfComponent }],
  },
];
