import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Feedback } from 'src/app/core/model/feedback.model';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'pa-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.scss'],
})
export class HomeDetailComponent implements OnInit {
  feedbackData!: Feedback[];
  name: string = '';
  constructor(private utilServ: UtilsService, private router: Router) {}
  ngOnInit(): void {
    this.name = sessionStorage['name'];
    this.utilServ.getFeedbackData();
    this.utilServ.feedbackData$.subscribe((feedbackData: Feedback[]) => {
      if (feedbackData) {
        this.feedbackData = feedbackData;
      }
    });
  }
  /**
   * @Description : Add new functionality
   */
  onAddNew() {
    this.router.navigateByUrl('home/feedback-form');
  }
}
