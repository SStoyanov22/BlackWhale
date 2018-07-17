import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class CommentService{

    constructor(private http : HttpClient) {

    }

    getCommentsForReview(reviewId){
        debugger
        return this.http.get<any>("/Comment/GetCommentsForReview?reviewId="+ reviewId)
    }
}