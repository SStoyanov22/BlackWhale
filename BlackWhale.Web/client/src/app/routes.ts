import { HomeComponent } from "./home/home.component";
import { Routes } from "@angular/router";
import { ReviewModule } from "./reviews/review.module";
import { ReviewDetailComponent } from "./reviews/review-detail/review-detail.component";

export const appRoutes : Routes = [
    { path : 'home' ,component : HomeComponent },
    { path : '' , redirectTo: "/home", pathMatch : 'full'},
    {path : 'reviews/details/:id', component: ReviewDetailComponent},
    { path : "reviews", loadChildren : ()=> ReviewModule}
]