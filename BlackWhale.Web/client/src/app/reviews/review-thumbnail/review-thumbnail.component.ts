import { Component, Input } from "@angular/core";

@Component({
    selector : "review-thumbnail",
    templateUrl : "./review-thumbnail.component.html"
})

export class ReviewThumbnailComponent{
    @Input() review;  
}