import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject } from 'rxjs';
import { Feedback } from 'src/app/core/model/feedback.model';
import { feedback } from '../../../assets/mock-data/mock-data';
@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  feedbackData!: Feedback[] | any;
  private feedbacks = new BehaviorSubject<any>(this.feedbackData);
  feedbackData$ = this.feedbacks.asObservable();
  constructor(private snackBar: MatSnackBar) {}
  /**
   * @description : To open toast message
   * @param message :string;
   * @param action :string;
   */
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000, // Duration in milliseconds
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }
  /**
   * @Description : To get data of feedbacks for home page
   */
  getFeedbackData(): void {
    this.feedbackData = feedback?.feedbacks;
    this.feedbacks.next(this.feedbackData);
  }
  /**
   * @description : Get comment from feedback form;
   * @param ratingForm :{ratingComment : string}
   * @returns : string
   */
  getComment(ratingForm: { ratingComment: string }): string {
    return ratingForm?.ratingComment;
  }

  /**
   * @description : To add new object to feedbackData array
   * @param newFeedback : Feedback
   */
  saveFeedbackData(newFeedback: Feedback): void {
    this.feedbackData?.unshift(newFeedback);
    this.feedbacks.next(this.feedbackData);
  }
}
