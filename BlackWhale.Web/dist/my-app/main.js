(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./client/src/$$_lazy_route_resource lazy recursive":
/*!*****************************************************************!*\
  !*** ./client/src/$$_lazy_route_resource lazy namespace object ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./client/src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./client/src/app/app.component.html":
/*!*******************************************!*\
  !*** ./client/src/app/app.component.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<layout></layout>>\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./client/src/app/app.component.ts":
/*!*****************************************!*\
  !*** ./client/src/app/app.component.ts ***!
  \*****************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./client/src/app/app.component.html")
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./client/src/app/app.module.ts":
/*!**************************************!*\
  !*** ./client/src/app/app.module.ts ***!
  \**************************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./client/src/app/app.component.ts");
/* harmony import */ var _nav_layout_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nav/layout/layout.component */ "./client/src/app/nav/layout/layout.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./client/src/app/home/home.component.ts");
/* harmony import */ var _user_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user/services/auth.service */ "./client/src/app/user/services/auth.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./routes */ "./client/src/app/routes.ts");
/* harmony import */ var _reviews_review_detail_review_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./reviews/review-detail/review-detail.component */ "./client/src/app/reviews/review-detail/review-detail.component.ts");
/* harmony import */ var _reviews_services_review_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./reviews/services/review.service */ "./client/src/app/reviews/services/review.service.ts");
/* harmony import */ var _comments_list_comments_comment_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./comments/list-comments/comment.component */ "./client/src/app/comments/list-comments/comment.component.ts");
/* harmony import */ var _comments_services_comment_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./comments/services/comment.service */ "./client/src/app/comments/services/comment.service.ts");
/* harmony import */ var _nav_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./nav/sidebar/sidebar.component */ "./client/src/app/nav/sidebar/sidebar.component.ts");
/* harmony import */ var _comments_comment_thumbnail_comment_thumbnail_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./comments/comment-thumbnail/comment-thumbnail.component */ "./client/src/app/comments/comment-thumbnail/comment-thumbnail.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _nav_layout_layout_component__WEBPACK_IMPORTED_MODULE_4__["LayoutComponent"],
                _nav_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_13__["SidebarComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _reviews_review_detail_review_detail_component__WEBPACK_IMPORTED_MODULE_9__["ReviewDetailComponent"],
                _comments_list_comments_comment_component__WEBPACK_IMPORTED_MODULE_11__["CommentComponent"],
                _comments_comment_thumbnail_comment_thumbnail_component__WEBPACK_IMPORTED_MODULE_14__["CommentThumbnail"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_routes__WEBPACK_IMPORTED_MODULE_8__["appRoutes"])
            ],
            providers: [_user_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"], _reviews_services_review_service__WEBPACK_IMPORTED_MODULE_10__["ReviewService"], _comments_services_comment_service__WEBPACK_IMPORTED_MODULE_12__["CommentService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./client/src/app/comments/comment-thumbnail/comment-thumbnail.component.html":
/*!************************************************************************************!*\
  !*** ./client/src/app/comments/comment-thumbnail/comment-thumbnail.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<li id=\"comment-{{comment.Id}}\">\r\n    <div class=\"commenterImage\">\r\n        <img src=\"/Content/Images/default-avatart.jpg\" />\r\n        <span class=\"sub-text-author\">{{comment.Author}}</span>\r\n    </div>\r\n    <div>\r\n\r\n\r\n    <span *ngIf=\"comment.IsModifed == true\" class=\"date sub-text\">{{comment.CreatedOn}} - Modified</span>\r\n\r\n    <span *ngIf=\"comment.IsModifed == false \"class=\"date sub-text\">{{comment.CreatedOn}} </span>\r\n       \r\n    </div>\r\n    <div class=\"commentText\">\r\n        <p id=\"comment-text-{{comment.Id}}\" class=\"comment-text-wrapper\">{{comment.Content}}</p>\r\n        <textarea id=\"comment-text-input-{{comment.Id}}\" class=\"comment-text-wrapper\" style=\"display : none\"></textarea>\r\n       \r\n       <!-- @if (Model.Author == User.Identity.Name)\r\n       { -->\r\n        <div class=\"comment-button-container\">\r\n            <div class=\"comment-button-section\" id=\"edit-button-section-{{comment.Id}}\">\r\n                <span class=\"glyphicon glyphicon-pencil\"></span>\r\n                <a href=\"#/\" id=\"edit-comment-button-{{comment.Id}}\" class=\"comment-button-action\">\r\n                    <span id=\"edit-comment-name-{{comment.Id}}\">Edit</span>\r\n                </a>\r\n            </div>\r\n            <div class=\"comment-button-section\" id=\"save-button-section-{{comment.Id}}\" style=\"display : none\">\r\n                <span class=\"glyphicon glyphicon-check\"></span>\r\n                <a href=\"#/\" id=\"save-comment-button-{{comment.Id}}\" class=\"comment-button-action\">\r\n                    <span id=\"save-comment-name-{{comment.Id}}\">Save</span>\r\n                </a>\r\n            </div>\r\n            <div class=\"comment-button-section\" id=\"delete-button-section-{{comment.Id}}\">\r\n                <span class=\"glyphicon glyphicon-remove\"></span>\r\n                <a href=\"#/\" id=\"delete-comment-button-{{comment.Id}}\" class=\"comment-button-action\">Delete</a>\r\n            </div>\r\n        </div>\r\n       <!-- } -->\r\n    </div>\r\n    <hr />\r\n</li>"

/***/ }),

/***/ "./client/src/app/comments/comment-thumbnail/comment-thumbnail.component.ts":
/*!**********************************************************************************!*\
  !*** ./client/src/app/comments/comment-thumbnail/comment-thumbnail.component.ts ***!
  \**********************************************************************************/
/*! exports provided: CommentThumbnail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentThumbnail", function() { return CommentThumbnail; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CommentThumbnail = /** @class */ (function () {
    function CommentThumbnail() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CommentThumbnail.prototype, "comment", void 0);
    CommentThumbnail = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "comment-thumbnail",
            template: __webpack_require__(/*! ./comment-thumbnail.component.html */ "./client/src/app/comments/comment-thumbnail/comment-thumbnail.component.html")
        })
    ], CommentThumbnail);
    return CommentThumbnail;
}());



/***/ }),

/***/ "./client/src/app/comments/list-comments/comment.component.html":
/*!**********************************************************************!*\
  !*** ./client/src/app/comments/list-comments/comment.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"detailBox\">\r\n    <div class=\"actionBox\">\r\n        <ul class=\"commentList\">\r\n\r\n            <li *ngIf=\"comments?.length > 0\">\r\n                <div class=\"commenterImage\">\r\n                    <img src=\"/Content/Images/default-avatart.jpg\" />\r\n                    <span class=\"sub-text-author\">user@user.com</span>\r\n                </div>\r\n                <div class=\"commentText\">\r\n                    <p  class=\"comment-text-wrapper sub-text-author\">Write the first comment...</p>\r\n                    <textarea class=\"comment-text-wrapper\" style=\"display : none\"></textarea>\r\n                    \r\n                </div>\r\n                <hr />\r\n            </li>\r\n            <div *ngFor=\"let comment of comments\">\r\n                <comment-thumbnail [comment]=\"comment\"></comment-thumbnail>\r\n            </div>\r\n        </ul>\r\n        <div class=\"form-inline\">\r\n            <div class=\"form-group\">\r\n                <textarea  id=\"comment-input-field\"class=\"form-control\" type=\"text\" placeholder=\"Leave your comments\" ></textarea>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <button class=\"btn btn-primary\" id=\"button-comment-@Model.ReviewId\">Add Comment</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./client/src/app/comments/list-comments/comment.component.ts":
/*!********************************************************************!*\
  !*** ./client/src/app/comments/list-comments/comment.component.ts ***!
  \********************************************************************/
/*! exports provided: CommentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentComponent", function() { return CommentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_comment_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/comment.service */ "./client/src/app/comments/services/comment.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CommentComponent = /** @class */ (function () {
    function CommentComponent(commentService) {
        this.commentService = commentService;
    }
    CommentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.commentService.getCommentsForReview(this.reviewId)
            .subscribe(function (data) { return _this.comments = data; });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CommentComponent.prototype, "reviewId", void 0);
    CommentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "comments",
            template: __webpack_require__(/*! ./comment.component.html */ "./client/src/app/comments/list-comments/comment.component.html")
        }),
        __metadata("design:paramtypes", [_services_comment_service__WEBPACK_IMPORTED_MODULE_1__["CommentService"]])
    ], CommentComponent);
    return CommentComponent;
}());



/***/ }),

/***/ "./client/src/app/comments/services/comment.service.ts":
/*!*************************************************************!*\
  !*** ./client/src/app/comments/services/comment.service.ts ***!
  \*************************************************************/
/*! exports provided: CommentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentService", function() { return CommentService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CommentService = /** @class */ (function () {
    function CommentService(http) {
        this.http = http;
    }
    CommentService.prototype.getCommentsForReview = function (reviewId) {
        debugger;
        return this.http.get("/Comment/GetCommentsForReview?reviewId=" + reviewId);
    };
    CommentService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CommentService);
    return CommentService;
}());



/***/ }),

/***/ "./client/src/app/home/home.component.html":
/*!*************************************************!*\
  !*** ./client/src/app/home/home.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\" id=\"particles-js\" >\r\n    <h2>BE A WHALE IN THE CRYPTO OCEAN</h2>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-8\" >\r\n            <p class=\"lead\">Black Whale is the cryptocommunity's one-stop shop for ICO and market information. Quick to read, easy to understand, always up to date!</p>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"content\">\r\n\r\n    <!-- CONTAINER -->\r\n    <div class=\"container\">\r\n        <div class=\"row irow-sm text-center cards cards-inside\">\r\n            <div class=\"col-md-3 col-sm-6\">\r\n                <a href=\"\" class=\"card card-light card-lightest card-border-solid\">\r\n                    <div class=\"icon icon-color icon-size-4\" data-hover=\"rotateIn\">\r\n                        <i class=\"fa fa-hdd-o\"></i>\r\n                    </div>\r\n                    <h3>Crypto 101</h3>\r\n                    <h4><em>Our starters toolkit</em></h4>\r\n                    <p class=\"cards-text-height\">\r\n                        Not sure where to start? New to\r\n                        crypto? Look no further - Crypto 101\r\n                        will get you going with the essentials\r\n                        every cryptoinvestor has to cover -\r\n                        creating a wallet, registering on\r\n                        exchanges, depositing and\r\n                        withdrawing funds. An absolute must\r\n                        for beginners!\r\n                    </p>\r\n                    <div class=\"heading-divider\"></div>\r\n                </a>\r\n            </div>\r\n            <div class=\"col-md-3 col-sm-6\">\r\n                <a href=\"\" class=\"card card-light card-lightest card-border-solid\">\r\n                    <div class=\"icon icon-color icon-size-4\" data-hover=\"flash\">\r\n                        <i class=\"fa fa-comment-o\"></i>\r\n                    </div>\r\n                    <h3>ICO Reviews</h3>\r\n                    <h4><em>Our opinion on projects</em></h4>\r\n                    <p class=\"cards-text-height\">\r\n                        Wonder where to invest your hard\r\n                        earned money? Overwhelmed with\r\n                        the amount of information per\r\n                        project? Our patented one-pager\r\n                        ICO reviews compress the most\r\n                        essential data per project to\r\n                        provide a quick-read overview of\r\n                        upcoming investment\r\n                        opportunities. Great to read on\r\n                        your phone screen while\r\n                        commuting to work in the morning!\r\n                    </p>\r\n                    <div class=\"heading-divider\"></div>\r\n                </a>\r\n            </div>\r\n            <div class=\"col-md-3 col-sm-6\">\r\n                <a href=\"\" class=\"card card-light card-lightest card-border-solid\">\r\n                    <div class=\"icon icon-color icon-size-4\" data-hover=\"pulse\">\r\n                        <i class=\"fa fa-heart-o\"></i>\r\n                    </div>\r\n                    <h3>GitHUB Reviews</h3>\r\n                    <h4><em>Our opinion on code</em></h4>\r\n                    <p class=\"cards-text-height\">\r\n                        Marketing and hype are all great,\r\n                        but any ICO needs to deliver and\r\n                        programming is where it starts.\r\n                        Our experienced developers\r\n                        review hundreds of lines of code\r\n                        every day to provide an informed\r\n                        view on whether projects have\r\n                        set up their code for success.\r\n                    </p>\r\n                    <div class=\"heading-divider\"></div>\r\n                </a>\r\n            </div>   \r\n            <div class=\"col-md-3 col-sm-6\">\r\n                <a href=\"\" class=\"card card-light card-lightest card-border-solid\">\r\n                    <div class=\"icon icon-color icon-size-4\" data-hover=\"pulse\">\r\n                        <i class=\"fa fa-heart-o\"></i>\r\n                    </div>\r\n                    <h3>Trading Analysis</h3>\r\n                    <h4><em>Our opinion on markets</em></h4>\r\n                    <p class=\"cards-text-height\">\r\n                        What happens to altcoins once\r\n                        the excitement of ICOs wears\r\n                        down? We scan through markets\r\n                        on a daily basis indicating\r\n                        potential strong positions to buy\r\n                        or sell taking into account\r\n                        current market conditions,\r\n                        volumes and project roadmaps.\r\n                    </p>\r\n                    <div class=\"heading-divider\"></div>\r\n                </a>\r\n            </div>\r\n        </div>\r\n\r\n        <hr class=\"hr-nobg\">\r\n\r\n        <div class=\"iwrap iwrap-light\">\r\n            <div class=\"container\">\r\n                <div class=\"row irow-xs\">\r\n                    <div class=\"col-sm-3 img-wrap img-wrap-left\" style=\"height: 381px;\">\r\n                        <i class=\"icon-group\"></i>\r\n                    </div>\r\n                    <div class=\"col-sm-7 col-sm-offset-1 text-wrap\">\r\n                        <h3>Our Team</h3>\r\n                        <div class=\"heading-divider\"></div>\r\n                        <p>\r\n                            We are a team of crypto-investors and researchers from different walks of life united under our common belief in the impact and\r\n                            profound change that blockchain and blockchain projects will bring about in our lives and business we do. Our background are varied\r\n                            and cover software development, marketing and market research, finance, and management consulting. The way we have\r\n                            assembled our team aims to cover all aspects of an ICO project to provide the most comprehensive and content-relevant reviews\r\n                            and tips to the crypto-community.\r\n                            We are constantly working to polish and expand our proposition to our readers so expect regular upgrades and additions!\r\n                        </p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <hr class=\"hr-nobg\">\r\n\r\n        <div class=\"iwrap iwrap-light\">\r\n            <div class=\"container\">\r\n                <div class=\"row irow-xs\">\r\n                    <div class=\"col-sm-7 text-wrap\">\r\n                        <h3>Our Disclaimer</h3>\r\n                        <div class=\"heading-divider\"></div>\r\n                        <p>\r\n                            Please note that we are not financial advisors. All information, reviews and opinions on this website is NOT financial advice! It is simply our\r\n                            opinion put together for entertainment purposes. Do your own research!\r\n\r\n                        </p>\r\n                        <div class=\"row irow-xs\">\r\n                            <!-- <p style=\"margin-left : 4.33%;\"> Contact: <a href=\"mailto:BlackWhale.Group@yahoo.com\" />BlackWhale.Group@yahoo.com</p> -->\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-3 col-sm-offset-1 img-wrap img-wrap-right\" style=\"height: 381px;\">\r\n\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./client/src/app/home/home.component.ts":
/*!***********************************************!*\
  !*** ./client/src/app/home/home.component.ts ***!
  \***********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./home.component.html */ "./client/src/app/home/home.component.html")
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./client/src/app/nav/layout/layout.component.html":
/*!*********************************************************!*\
  !*** ./client/src/app/nav/layout/layout.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <!-- NAVBAR -->\r\n <nav class=\"navbar container sf-js-enabled sf-arrows\" style=\"touch-action: pan-y;\">\r\n    <!-- NAVBAR BRAND -->\r\n    <a class=\"navbar-brand pull-left\" href=\"\">\r\n        BlackWhale\r\n    </a>\r\n    <!-- NAVBAR COLLAPSE -->\r\n    <div id=\"navbar\" class=\"navbar-collapse pull-right\">\r\n        <ul class=\"nav navbar-nav\">\r\n            <li class=\"active dropdown\">\r\n                <a [routerLink]=\"['/']\" class=\"sf-with-ul\">Home</a>\r\n            </li>\r\n            <li class=\"dropdown\">\r\n                <a [routerLink]=\"['/reviews']\" class=\"sf-with-ul\">Reviews</a>\r\n            </li>\r\n            <li class=\"dropdown\">\r\n                <a [routerLink]=\"['/home/about']\" class=\"sf-with-ul\">About</a>\r\n            </li>\r\n            <li class=\"dropdown\">\r\n                <a href=\"\" class=\"sf-with-ul\">Crypto 101</a>\r\n            </li>\r\n            <li class=\"dropdown\">\r\n                <a href=\"\" class=\"sf-with-ul\">Crypto Trading</a>\r\n            </li>\r\n\r\n                <li class=\"dropdown\">\r\n                    <a [routerLink]=\"['/account/login']\" class=\"sf-with-ul\">Login</a>\r\n                </li>\r\n                        <li class=\"dropdown\">\r\n                            <a [routerLink]=\"['/account/register']\" class=\"sf-with-ul\">Register</a>\r\n                        </li>\r\n\r\n                <li class=\"dropdown\">\r\n                    <a href=\"\" class=\"sf-with-ul\">@User.Identity.Name</a>\r\n                </li>\r\n                        <li class=\"dropdown\">\r\n                            \r\n                            <a class=\"sf-with-ul\" href=\"javascript:document.getElementById('logoutForm').submit()\">Logout</a>\r\n\r\n                        </li>\r\n            \r\n        </ul>\r\n    </div>\r\n    <!-- /.navbar-collapse -->\r\n\r\n</nav>\r\n<!-- /.navbar -->\r\n"

/***/ }),

/***/ "./client/src/app/nav/layout/layout.component.ts":
/*!*******************************************************!*\
  !*** ./client/src/app/nav/layout/layout.component.ts ***!
  \*******************************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../user/services/auth.service */ "./client/src/app/user/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LayoutComponent = /** @class */ (function () {
    function LayoutComponent(auth) {
        this.auth = auth;
    }
    LayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'layout',
            template: __webpack_require__(/*! ./layout.component.html */ "./client/src/app/nav/layout/layout.component.html")
        }),
        __metadata("design:paramtypes", [_user_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "./client/src/app/nav/sidebar/sidebar.component.html":
/*!***********************************************************!*\
  !*** ./client/src/app/nav/sidebar/sidebar.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<aside class=\"col-md-12 col-sm-12\">\r\n        <div class=\"widget widget_categories\">\r\n            <h2 class=\"widget-title\">Portfolio</h2>\r\n            <ul>\r\n                <li>\r\n                    <a href=\"\">Nature</a> 36<ul class=\"children\">\r\n                        <li>\r\n                            <a href=\"\">Seaside</a> 12\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"\">Wildlife</a> 180\r\n                        </li>\r\n                    </ul>\r\n                </li>\r\n                <li>\r\n                    <a href=\"\">People and Wedding</a> 9\r\n                    <ul class=\"children\">\r\n                        <li><a href=\"\">Portraits</a> 24</li>\r\n                        <li><a href=\"\">Wedding</a> 36</li>\r\n                    </ul>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n        <hr>\r\n        <div class=\"widget widget_calendar\">\r\n            <h2 class=\"widget-title\">September 2015</h2>\r\n            <table>\r\n                <thead>\r\n                    <tr>\r\n                        <th scope=\"col\" title=\"Monday\">M</th>\r\n                        <th scope=\"col\" title=\"Tuesday\">T</th>\r\n                        <th scope=\"col\" title=\"Wednesday\">W</th>\r\n                        <th scope=\"col\" title=\"Thursday\">T</th>\r\n                        <th scope=\"col\" title=\"Friday\">F</th>\r\n                        <th scope=\"col\" title=\"Saturday\">S</th>\r\n                        <th scope=\"col\" title=\"Sunday\">S</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr>\r\n                        <td colspan=\"2\">&nbsp;</td>\r\n                        <td><a href=\"\">1</a></td>\r\n                        <td><a href=\"\">2</a></td>\r\n                        <td><a href=\"\">3</a></td>\r\n                        <td><a href=\"\">4</a></td>\r\n                        <td>5</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>6</td>\r\n                        <td>7</td>\r\n                        <td id=\"today\">8</td>\r\n                        <td><a href=\"\">9</a></td>\r\n                        <td><a href=\"\">10</a></td>\r\n                        <td><a href=\"\">11</a></td>\r\n                        <td>12</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td><a href=\"\">13</a></td>\r\n                        <td><a href=\"\">14</a></td>\r\n                        <td>15</td>\r\n                        <td><a href=\"\">16</a></td>\r\n                        <td>17</td>\r\n                        <td><a href=\"\">18</a></td>\r\n                        <td><a href=\"\">19</a></td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td><a href=\"\">20</a></td>\r\n                        <td>21</td>\r\n                        <td><a href=\"\">22</a></td>\r\n                        <td><a href=\"\">23</a></td>\r\n                        <td><a href=\"\">24</a></td>\r\n                        <td>25</td>\r\n                        <td>26</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>27</td>\r\n                        <td>28</td>\r\n                        <td><a href=\"\">29</a></td>\r\n                        <td><a href=\"\">30</a></td>\r\n                        <td colspan=\"3\">&nbsp;</td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n        <div class=\"widget widget_search\">\r\n            <h2 class=\"widget-title\">Project Search</h2>\r\n            <form method=\"get\" class=\"search-form\" action=\"/\">\r\n                <label>\r\n                    <span class=\"screen-reader-text\">Search for:</span>\r\n                    <input type=\"search\" class=\"search-field\" placeholder=\"Type and press enter\">\r\n                </label>\r\n                <button type=\"submit\" class=\"search-submit\"><i class=\"fa fa-search\"></i></button>\r\n            </form>\r\n            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.</p>\r\n        </div>\r\n        <hr>\r\n        <div class=\"widget widget_recent_entries\">\r\n            <h2 class=\"widget-title\">Recent Posts</h2>\r\n            <ul>\r\n                <li><a href=\"\">HTML Tags and Formatting</a></li>\r\n                <li><a href=\"\">Markup: Image and Text Alignment</a></li>\r\n                <li><a href=\"\">Title With Special Characters</a></li>\r\n                <li><a href=\"\">Post about web design</a></li>\r\n            </ul>\r\n        </div>\r\n        <hr>\r\n        <div class=\"widget widget_archive\">\r\n            <div class=\"col-sm-4\">\r\n                <h3>Submit an ICO</h3>\r\n                <div class=\"form-wrap\">\r\n                    <div class=\"form-group\">\r\n                        <input type=\"text\" placeholder=\"ICO Name\">\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <input type=\"text\" placeholder=\"Website\">\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <input type=\"text\" placeholder=\"Telegram\">\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <input type=\"text\" placeholder=\"Twitter\">\r\n                    </div>\r\n                </div>\r\n                <button type=\"submit\" class=\"btn btn-info\"></button>\r\n            </div>\r\n        </div>\r\n        <hr><div class=\"widget widget_tag_cloud\">\r\n            <h2 class=\"widget-title\">Popular Tags</h2>\r\n            <div class=\"tagcloud\">\r\n                <a href=\"#\">Agency</a>\r\n                <a href=\"#\">Blog</a>\r\n                <a href=\"#\">Bootstrap</a>\r\n                <a href=\"#\">Category</a>\r\n                <a href=\"#\">Creative</a>\r\n                <a href=\"#\">Masonry</a>\r\n                <a href=\"#\">Grid</a>\r\n                <a href=\"#\">Portfolio</a>\r\n                <a href=\"#\">Responsive</a>\r\n                <a href=\"#\">Photography</a>\r\n                <a href=\"#\">Modern</a>\r\n            </div>\r\n        </div>\r\n    </aside>"

/***/ }),

/***/ "./client/src/app/nav/sidebar/sidebar.component.ts":
/*!*********************************************************!*\
  !*** ./client/src/app/nav/sidebar/sidebar.component.ts ***!
  \*********************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
    }
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "side-bar",
            template: __webpack_require__(/*! ./sidebar.component.html */ "./client/src/app/nav/sidebar/sidebar.component.html")
        })
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./client/src/app/reviews/review-detail/review-detail.component.html":
/*!***************************************************************************!*\
  !*** ./client/src/app/reviews/review-detail/review-detail.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container post format-standart\">\r\n    <div class=\"entry\">\r\n        <header class=\"entry-header\">\r\n            <h2>\r\n                <a href=\"\">{{review.Title}}</a>\r\n            </h2>\r\n            <div class=\"meta\">\r\n                <a href=\"\" class=\"author\">\r\n                    <i class=\"fa fa-user\"></i>{{review.Reviewer}}\r\n                </a>\r\n                <small>\r\n                    <i class=\"fa fa-calendar\"></i>{{review.LastUpdated | date}}\r\n                </small>\r\n\r\n                <small><i class=\"fa fa-folder\"></i> {{review.Category}}</small>\r\n                <small><i class=\"fa fa-folder\"></i> {{review.Status}}</small>\r\n            </div>\r\n        </header>\r\n        <div class=\"entry-content\" innerHTML=\"{{review.Article}}\">\r\n            \r\n        </div>\r\n        <comments [reviewId]=\"review.Id\"></comments>\r\n    </div>\r\n</div>\r\n<hr>"

/***/ }),

/***/ "./client/src/app/reviews/review-detail/review-detail.component.ts":
/*!*************************************************************************!*\
  !*** ./client/src/app/reviews/review-detail/review-detail.component.ts ***!
  \*************************************************************************/
/*! exports provided: ReviewDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewDetailComponent", function() { return ReviewDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_review_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/review.service */ "./client/src/app/reviews/services/review.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReviewDetailComponent = /** @class */ (function () {
    function ReviewDetailComponent(reviewService, route) {
        this.reviewService = reviewService;
        this.route = route;
    }
    ReviewDetailComponent.prototype.ngOnInit = function () {
        debugger;
        this.getById();
    };
    ReviewDetailComponent.prototype.getById = function () {
        var _this = this;
        var id = +this.route.snapshot.params["id"];
        this.reviewService.getReviewById(id).subscribe(function (review) { return _this.review = review; });
    };
    ReviewDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./review-detail.component.html */ "./client/src/app/reviews/review-detail/review-detail.component.html")
        }),
        __metadata("design:paramtypes", [_services_review_service__WEBPACK_IMPORTED_MODULE_1__["ReviewService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ReviewDetailComponent);
    return ReviewDetailComponent;
}());



/***/ }),

/***/ "./client/src/app/reviews/review-thumbnail/review-thumbnail.component.html":
/*!*********************************************************************************!*\
  !*** ./client/src/app/reviews/review-thumbnail/review-thumbnail.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container post format-standart\">\r\n    <div class=\"entry\">\r\n        <header class=\"entry-header\">\r\n            <h2>\r\n                <a [routerLink]=\"['details',review.Id]\">{{review.Title}}</a>\r\n            </h2>\r\n            <div class=\"meta\">\r\n                <a href=\"\" class=\"author\">\r\n                    <i class=\"fa fa-user\"></i>{{review.Reviewer}}\r\n                </a>\r\n                <small>\r\n                    <i class=\"fa fa-calendar\"></i>{{review.LastUpdated | date}}\r\n                </small>\r\n                <a >\r\n                    <div *ngIf=\"review.CommentsCount == 0\">\r\n                        <i class=\"fa fa-comment\"></i><span>No Comments</span>\r\n                    </div>\r\n                    <div *ngIf=\"review.CommentsCount > 0\">\r\n                        <i class=\"fa fa-comment\"></i><span>{{review.CommentsCount}} Comments</span>                        \r\n                    </div>\r\n                </a>\r\n\r\n                <small><i class=\"fa fa-folder\"></i> {{review.Category}}</small>\r\n                <small><i class=\"fa fa-folder\"></i> {{review.Status}}</small>\r\n            </div>\r\n        </header>\r\n        <div class=\"entry-content\">\r\n            <div>\r\n                <img class=\"review-main-image\" src=\"/Content/Images/{{review.ImageUrl}}\" />\r\n               <div class=\"review-description-container\">\r\n                   <p class=\"review-description-text\">{{review.Description}}</p>\r\n               </div>\r\n\r\n            </div>\r\n           <div>\r\n               <!-- @Html.ActionLink(\"Read More\", \"Details\", new { @id = Model.Id }, new { @class = \"btn btn-primary\" })\r\n               @if (User.IsInRole(GlobalConstants.ROLE_ADMINISTRATOR))\r\n               {\r\n                   @Html.ActionLink(\"Edit\", \"Edit\", new { @id = Model.Id }, new { @class = \"btn btn-primary\" })\r\n               } -->\r\n           </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<hr>"

/***/ }),

/***/ "./client/src/app/reviews/review-thumbnail/review-thumbnail.component.ts":
/*!*******************************************************************************!*\
  !*** ./client/src/app/reviews/review-thumbnail/review-thumbnail.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ReviewThumbnailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewThumbnailComponent", function() { return ReviewThumbnailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ReviewThumbnailComponent = /** @class */ (function () {
    function ReviewThumbnailComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ReviewThumbnailComponent.prototype, "review", void 0);
    ReviewThumbnailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "review-thumbnail",
            template: __webpack_require__(/*! ./review-thumbnail.component.html */ "./client/src/app/reviews/review-thumbnail/review-thumbnail.component.html")
        })
    ], ReviewThumbnailComponent);
    return ReviewThumbnailComponent;
}());



/***/ }),

/***/ "./client/src/app/reviews/review.module.ts":
/*!*************************************************!*\
  !*** ./client/src/app/reviews/review.module.ts ***!
  \*************************************************/
/*! exports provided: ReviewModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewModule", function() { return ReviewModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _reviews_list_reviews_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reviews-list/reviews-list.component */ "./client/src/app/reviews/reviews-list/reviews-list.component.ts");
/* harmony import */ var _review_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./review.routes */ "./client/src/app/reviews/review.routes.ts");
/* harmony import */ var _services_review_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/review.service */ "./client/src/app/reviews/services/review.service.ts");
/* harmony import */ var _review_thumbnail_review_thumbnail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./review-thumbnail/review-thumbnail.component */ "./client/src/app/reviews/review-thumbnail/review-thumbnail.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ReviewModule = /** @class */ (function () {
    function ReviewModule() {
    }
    ReviewModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _reviews_list_reviews_list_component__WEBPACK_IMPORTED_MODULE_3__["ReviewsListComponent"],
                _review_thumbnail_review_thumbnail_component__WEBPACK_IMPORTED_MODULE_6__["ReviewThumbnailComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_review_routes__WEBPACK_IMPORTED_MODULE_4__["reviewRoutes"])
            ],
            providers: [_services_review_service__WEBPACK_IMPORTED_MODULE_5__["ReviewService"]],
        })
    ], ReviewModule);
    return ReviewModule;
}());



/***/ }),

/***/ "./client/src/app/reviews/review.routes.ts":
/*!*************************************************!*\
  !*** ./client/src/app/reviews/review.routes.ts ***!
  \*************************************************/
/*! exports provided: reviewRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reviewRoutes", function() { return reviewRoutes; });
/* harmony import */ var _reviews_list_reviews_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reviews-list/reviews-list.component */ "./client/src/app/reviews/reviews-list/reviews-list.component.ts");

var reviewRoutes = [
    { path: '', component: _reviews_list_reviews_list_component__WEBPACK_IMPORTED_MODULE_0__["ReviewsListComponent"] },
    { path: "reviews", component: _reviews_list_reviews_list_component__WEBPACK_IMPORTED_MODULE_0__["ReviewsListComponent"] }
];


/***/ }),

/***/ "./client/src/app/reviews/reviews-list/reviews-list.component.html":
/*!*************************************************************************!*\
  !*** ./client/src/app/reviews/reviews-list/reviews-list.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n        <header class=\"pagetitle pagetitle-sm\">\r\n            <div class=\"container\">\r\n                <div class=\"divtable irow\">\r\n                    <div class=\"divcell\">\r\n                        <h1>Review</h1>\r\n                        <div class=\"divider\">\r\n                        </div>\r\n                        <span class=\"subtitle\">List of Reviews</span>\r\n                    </div>\r\n                    <!-- @if (User.IsInRole(GlobalConstants.ROLE_ADMINISTRATOR))\r\n                    { -->\r\n                        <div class=\"divcell text-right\">\r\n                            <a href=\"/Review/Create\" class=\"btn btn-primary create-review-button\">Create Review</a>\r\n                        </div>\r\n                    <!-- } -->\r\n                </div>\r\n            </div>\r\n        </header>\r\n        <div class=\"content row\">\r\n            <div class=\"col-md-3\">\r\n                <!-- <side-bar></side-bar> -->\r\n            </div>\r\n            <div class=\"col-md-9\">\r\n                <div class=\"form-group\">\r\n                   <div class=\"row\">\r\n                       <div class=\"col-md-6\">\r\n                           <!-- @Html.LabelFor(r => r.Categories, new { @class = \"col-sm-6\" }) -->\r\n                           <div class=\"col-sm-10\" id=\"form-review-content\">\r\n                               <!-- @Html.DropDownListFor(r => r.CategoryId, @Model.Categories, new { @id = \"categories-drowdown\" }) -->\r\n                           </div>\r\n                       </div>\r\n                      <div class=\"col-md-6\">\r\n                          <!-- @Html.LabelFor(r => r.Statuses, new { @class = \"col-sm-6\" }) -->\r\n                          <div class=\"col-sm-10\" id=\"form-review-content\">\r\n                              <!-- @Html.DropDownListFor(r => r.StatusId, @Model.Statuses, new { @id = \"statuses-drowdown\" }) -->\r\n                          </div>\r\n                      </div>\r\n                   </div>\r\n                </div>\r\n                <div class=\"content\">  \r\n                        <div *ngFor=\"let review of reviews\">\r\n                            <review-thumbnail [review]=\"review\"></review-thumbnail>\r\n                        </div>\r\n                     </div>\r\n            </div>\r\n        </div>\r\n    </div>"

/***/ }),

/***/ "./client/src/app/reviews/reviews-list/reviews-list.component.ts":
/*!***********************************************************************!*\
  !*** ./client/src/app/reviews/reviews-list/reviews-list.component.ts ***!
  \***********************************************************************/
/*! exports provided: ReviewsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewsListComponent", function() { return ReviewsListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_review_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/review.service */ "./client/src/app/reviews/services/review.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ReviewsListComponent = /** @class */ (function () {
    function ReviewsListComponent(reviewService) {
        this.reviewService = reviewService;
    }
    ReviewsListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.reviewService.getAllReviews().subscribe(function (review) { return _this.reviews = review; });
    };
    ReviewsListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./reviews-list.component.html */ "./client/src/app/reviews/reviews-list/reviews-list.component.html")
        }),
        __metadata("design:paramtypes", [_services_review_service__WEBPACK_IMPORTED_MODULE_1__["ReviewService"]])
    ], ReviewsListComponent);
    return ReviewsListComponent;
}());



/***/ }),

/***/ "./client/src/app/reviews/services/review.service.ts":
/*!***********************************************************!*\
  !*** ./client/src/app/reviews/services/review.service.ts ***!
  \***********************************************************/
/*! exports provided: ReviewService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewService", function() { return ReviewService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ReviewService = /** @class */ (function () {
    function ReviewService(http) {
        this.http = http;
    }
    ReviewService.prototype.getAllReviews = function () {
        return this.http.get("/Review/GetReviews");
    };
    ReviewService.prototype.getReviewById = function (id) {
        return this.http.get("/Review/Details?id=" + id);
    };
    ReviewService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ReviewService);
    return ReviewService;
}());



/***/ }),

/***/ "./client/src/app/routes.ts":
/*!**********************************!*\
  !*** ./client/src/app/routes.ts ***!
  \**********************************/
/*! exports provided: appRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutes", function() { return appRoutes; });
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/home.component */ "./client/src/app/home/home.component.ts");
/* harmony import */ var _reviews_review_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reviews/review.module */ "./client/src/app/reviews/review.module.ts");
/* harmony import */ var _reviews_review_detail_review_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reviews/review-detail/review-detail.component */ "./client/src/app/reviews/review-detail/review-detail.component.ts");



var appRoutes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"] },
    { path: '', redirectTo: "/home", pathMatch: 'full' },
    { path: 'reviews/details/:id', component: _reviews_review_detail_review_detail_component__WEBPACK_IMPORTED_MODULE_2__["ReviewDetailComponent"] },
    { path: "reviews", loadChildren: function () { return _reviews_review_module__WEBPACK_IMPORTED_MODULE_1__["ReviewModule"]; } }
];


/***/ }),

/***/ "./client/src/app/user/services/auth.service.ts":
/*!******************************************************!*\
  !*** ./client/src/app/user/services/auth.service.ts ***!
  \******************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.login = function (email, password) {
        var data = { email: email, password: password };
        this.http.post('/login', data);
    };
    AuthService.prototype.isAuthenticated = function () {
        return !!this.currentUser;
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./client/src/environments/environment.ts":
/*!************************************************!*\
  !*** ./client/src/environments/environment.ts ***!
  \************************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./client/src/main.ts":
/*!****************************!*\
  !*** ./client/src/main.ts ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./client/src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./client/src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!**********************************!*\
  !*** multi ./client/src/main.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\jinja\Desktop\BlackWhale-Angular\BlackWhale\BlackWhale.Web\client\src\main.ts */"./client/src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map