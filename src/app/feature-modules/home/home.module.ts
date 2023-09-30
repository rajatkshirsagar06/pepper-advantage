import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { HomeComponent } from './container/home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { HeaderComponent } from './comonents/header/header.component';
import { HomeDetailComponent } from './comonents/home-detail/home-detail.component';
import { UserTagComponent } from './comonents/user-tag/user-tag.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FeedbackCardComponent } from './comonents/feedback-card/feedback-card.component';

import { FeedbackFormComponent } from './comonents/feedback-form/feedback-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { CulturePipe } from 'src/app/shared/pipe/culture.pipe';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    HomeDetailComponent,
    UserTagComponent,
    FeedbackCardComponent,
    FeedbackFormComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    HomeRoutingModule,
    MatSidenavModule,
  ],
  providers: [DatePipe],
})
export class HomeModule {}
