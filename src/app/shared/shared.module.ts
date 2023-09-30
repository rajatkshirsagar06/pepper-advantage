import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaInputComponent } from './components/pa-input/pa-input.component';
import { FormsModule } from '@angular/forms';
import { RatingStarComponent } from './components/rating-star/rating-star.component';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CulturePipe } from './pipe/culture.pipe';
@NgModule({
  declarations: [PaInputComponent, RatingStarComponent, CulturePipe],
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
  ],
  exports: [PaInputComponent, RatingStarComponent, CulturePipe],
})
export class SharedModule {}
