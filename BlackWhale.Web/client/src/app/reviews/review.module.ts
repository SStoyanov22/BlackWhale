import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { ReviewsListComponent } from './reviews-list/reviews-list.component';
import { reviewRoutes } from './review.routes';
import { ReviewService } from './services/review.service';
import { ReviewThumbnailComponent } from './review-thumbnail/review-thumbnail.component';
import { ReviewDetailComponent } from './review-detail/review-detail.component';


@NgModule({
  declarations: [
    ReviewsListComponent,
    ReviewThumbnailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(reviewRoutes)
  ],
  providers: [ReviewService],
})
export class ReviewModule { 

}
