import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { LayoutComponent } from './nav/layout/layout.component';
import {HomeComponent} from './home/home.component';
import { AuthService } from './user/services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { appRoutes } from './routes';
import { ReviewDetailComponent } from './reviews/review-detail/review-detail.component';
import { ReviewService } from './reviews/services/review.service';
import { CommentComponent } from './comments/list-comments/comment.component';
import { CommentService } from './comments/services/comment.service';
import { SidebarComponent } from './nav/sidebar/sidebar.component';
import { CommentThumbnail } from './comments/comment-thumbnail/comment-thumbnail.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    SidebarComponent,
    HomeComponent,
    ReviewDetailComponent,
    CommentComponent,
    CommentThumbnail
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthService, ReviewService, CommentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
