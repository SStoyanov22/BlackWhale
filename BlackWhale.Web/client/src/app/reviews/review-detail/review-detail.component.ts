import { Component, OnInit } from "@angular/core";
import { ReviewService } from "../services/review.service";
import { ActivatedRoute } from "@angular/router";

@Component({
    templateUrl : "./review-detail.component.html"
})
export class ReviewDetailComponent implements OnInit{
    review : any;
    constructor(private reviewService : ReviewService, private route : ActivatedRoute) {

    }

    ngOnInit(){
        debugger
        this.getById()
    }

    getById(){
        let id = +this.route.snapshot.params["id"];
        this.reviewService.getReviewById(id).subscribe(review => this.review = review);
    }
}