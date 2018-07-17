import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class ReviewService{

    constructor(private http: HttpClient ) {

    }

    getAllReviews() : Observable<any>{
        return this.http.get<any>("/Review/GetReviews")
    }

    getReviewById(id : number){
        return this.http.get<any>("/Review/Details?id=" + id)
    }
}