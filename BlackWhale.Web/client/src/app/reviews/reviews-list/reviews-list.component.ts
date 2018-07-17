import {Component, OnInit} from "@angular/core"
import { ReviewService } from "../services/review.service";

@Component({
templateUrl : "./reviews-list.component.html"
})

export class ReviewsListComponent implements OnInit{

    reviews : any;
    constructor(private reviewService : ReviewService) {

    }
    
    ngOnInit(){
        this.reviewService.getAllReviews().subscribe( review => this.reviews = review);
    }
}