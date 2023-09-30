import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { HomeComponent } from './container/home/home.component';
import { HomeDetailComponent } from './comonents/home-detail/home-detail.component';

import { FeedbackFormComponent } from './comonents/feedback-form/feedback-form.component';

const routes: Route[] = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', component: HomeDetailComponent },
      { path: 'feedback-form', component: FeedbackFormComponent },
      { path: '**', redirectTo: '' },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
