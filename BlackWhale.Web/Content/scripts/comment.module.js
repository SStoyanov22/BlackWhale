var commentModule = (function () {

    function configreviewComments(reviewId) {
        var $commentContainerSelector = $("#comments-container");

        $.get("/Comment/GetCommentsForReview?reviewId=" + reviewId)
            .then(function (comments) {
            $commentContainerSelector.html(comments);
            })

        $("button-comment-" + reviewId).on("click", function () {
            $.get("/Comment/Create?reviewId=" + reviewId)
            .then(function (comments) {
                $commentContainerSelector.html(comments);
            })
        })
    }

    return {
        configreviewComments: configreviewComments
    }
}());