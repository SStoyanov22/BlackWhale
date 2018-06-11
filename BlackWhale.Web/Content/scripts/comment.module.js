var commentModule = (function () {

    var GET_COMMENT_FOR_REVIEW_URL = "/Comment/GetCommentsForReview?reviewId=";
    var CREATE_COMMENT_FOR_REVIEW_URL = "/Comment/Create";
    var EDIT_COMMENT_FOR_REVIEW_URL = "/Comment/Edit";
    var DELETE_COMMENT_FOR_REVIEW_URL = "/Comment/Delete"

    function configReviewComments(reviewId) {
        var $commentContainerSelector = $("#comments-container");

        $.get(GET_COMMENT_FOR_REVIEW_URL + reviewId)
        .then(function (comments) {
            $commentContainerSelector.html(comments);
        })
    }

    function configureCreateComment(reviewId) {

        var $commentContainerSelector = $(".commentList")
        var self = this;

        $("#button-comment").on("click", function () {
            var content = $("#comment-input-field").val();

            var data = {
                reviewId: reviewId,
                content: content
            };

            $.post(CREATE_COMMENT_FOR_REVIEW_URL, data)
            .then(function (comments) {
                var result = $(comments)
                $commentContainerSelector.append(result);
                $("#comment-input-field").val("")
            })
        })
    }

    function configEditComments(commentId) {

        var $comment = $("#comment-" + commentId);
        var $editCommentTextArea = $("#comment-text-input-" + commentId);
        var $commentContent = $("#comment-text-" + commentId);
        var $editButtonSection = $("#edit-button-section-" + commentId);
        var $saveButtonSection = $("#save-button-section-" + commentId);

        $("#edit-comment-button-" + commentId).on("click", function () {
            
            var commentText = $commentContent.html();
            console.log(commentText)
            $commentContent.hide();
            $editCommentTextArea.show();

            $editButtonSection.hide();
            $saveButtonSection.show();
            $editCommentTextArea.val(commentText)
           
        })

        $("#save-comment-button-" + commentId).on("click", function () {
            var content = $editCommentTextArea.val();

            var data = {
                Id : commentId,
                Content: content
            }

            $.post(EDIT_COMMENT_FOR_REVIEW_URL, data).then(function (comment) {
                var result = $(comment)
                $comment.html(result);
            });
        })

       
        $("#delete-comment-button-" + commentId).on("click", function () {
            var data = {
                id : commentId
            }

            $.post(DELETE_COMMENT_FOR_REVIEW_URL, data).then(function () {
                $comment.html("");
            });
        })


    }


    return {
        configReviewComments: configReviewComments,
        configureCreateComment: configureCreateComment,
        configEditComments: configEditComments
    }
}());