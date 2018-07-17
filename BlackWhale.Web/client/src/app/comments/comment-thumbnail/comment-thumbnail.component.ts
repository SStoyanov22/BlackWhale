import { Component, Input } from "@angular/core";

@Component({
    selector : "comment-thumbnail",
    templateUrl : "./comment-thumbnail.component.html"
})
export class CommentThumbnail{
    @Input() comment : any;
}