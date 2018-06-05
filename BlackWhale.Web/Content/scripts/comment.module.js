var commentModule = (function () {

    function configreviewComments(reviewId) {
        var $commentContainerSelector = $("#comments-container");

        $.get("/Comment/GetCommentsForReview?reviewId=" + reviewId)
            .then(function (comments) {
            $commentContainerSelector.html(comments);
            })

        $("#button-comment-" + reviewId).on("click", function () {
            $.get("/Comment/Create?reviewId=" + reviewId)
            .then(function (comments) {
                $commentContainerSelector.append(comments);
            })
        })
    }

    function configureCreateComment(reviewId) {

        var $commentContainerSelector = $("#comments-container").find(".content");
        var self = this;

        $("#create-comment-button-" + reviewId).on("click", function () {

            var content = $("#comment-content").val();
            var data = {
                reviewId: reviewId,
                content : content
            };

            $.post("/Comment/Create", data)
            .then(function (comments) {

                $("#create-comment-container").remove();
                var result = $(comments).removeClass("content");
                $commentContainerSelector.append(result);
            })
        })
    }

    return {
        configreviewComments: configreviewComments,
        configureCreateComment : configureCreateComment
    }
}());