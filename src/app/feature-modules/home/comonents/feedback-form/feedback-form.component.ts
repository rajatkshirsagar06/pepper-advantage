import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Feedback } from 'src/app/core/model/feedback.model';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.scss'],
})
export class FeedbackFormComponent {
  rating: number = 0;
  starCount: number = 5;
  ratingForm: FormGroup = new FormGroup({
    ratingComment: new FormControl(),
  });
  constructor(
    private router: Router,
    private utilityServ: UtilsService,
    private datePipe: DatePipe
  ) {}
  /**
   * @Description : To navigate back to home page
   */
  navigateToHomePage(): void {
    this.router.navigateByUrl('/home');
  }
  /**
   * @Description : To change the rating of feedback
   * @param rating
   */
  onRatingChanged(rating: any) {
    this.rating = rating;
  }

  /**
   * @Description : On Submit data
   * @param rating
   */
  onSubmit(): void {
    const currentDate = new Date();
    const formattedDate = this.datePipe.transform(currentDate, 'dd/MM/yyyy');

    if (this.ratingForm?.valid && this.rating > 0) {
      const comment = this.ratingForm.value;
      const newFeedback: Feedback = {
        comment: this.utilityServ.getComment(this.ratingForm?.value),
        starCount: 5,
        rating: this.rating,
        date: formattedDate,
      };
      this.utilityServ.saveFeedbackData(newFeedback);
      this.utilityServ.openSnackBar('Feedback Added successfully !!', 'Close');
      this.navigateToHomePage();
    } else {
      this.utilityServ.openSnackBar(
        'Please Add comment and rating to submit the feedback',
        'Close'
      );
    }
  }
}
