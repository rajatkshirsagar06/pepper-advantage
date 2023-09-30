import { Component, Input } from '@angular/core';
import { Feedback } from 'src/app/core/model/feedback.model';

@Component({
  selector: 'pa-feedback-card',
  templateUrl: './feedback-card.component.html',
  styleUrls: ['./feedback-card.component.scss'],
})
export class FeedbackCardComponent {
  @Input() name: string = '';
  @Input() feedbackData: Feedback = {
    comment: '',
    rating: 0,
    date: '',
    starCount: 0,
  };
}
