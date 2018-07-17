import { Component, Input, OnInit } from "@angular/core";
import { CommentService } from "../services/comment.service";

@Component({
    selector : "comments",
    templateUrl : "comment.component.html"
})

export class CommentComponent implements OnInit{
    @Input() reviewId;
    comments : any;
    constructor(private commentService : CommentService) {

    }

    ngOnInit(){
        this.commentService.getCommentsForReview(this.reviewId)
        .subscribe((data) => this.comments = data );
    }
}