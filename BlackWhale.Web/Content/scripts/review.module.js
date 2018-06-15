var reviewModule = (function () {

    function configReviewCreateView() {

        var $selector = '#review-text-area';
        var $articleTemplate = $("#article-template-container").html();

        tinymce.init({
            selector: $selector,
            height: 400,
            theme: 'modern',
            plugins: [
      "advlist autolink lists link image charmap print preview hr anchor pagebreak",
      "searchreplace wordcount visualblocks visualchars code fullscreen",
      "insertdatetime media nonbreaking save table contextmenu directionality",
      "emoticons template paste textcolor colorpicker textpattern"
            ],
            toolbar1: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image",
            toolbar2: "print preview media | forecolor backcolor emoticons",
            image_advtab: true,
            paste_data_images: true,
            templates: [
              { title: 'Article Template', content: $articleTemplate }
            ],
            content_css: [
              '//fonts.googleapis.com/css?family=Lato:300,300i,400,400i',
              '//www.tinymce.com/css/codepen.min.css'
            ], theme_advanced_buttons1: "save,newdocument,|,bold,italic,underline,strikethrough,|,justifyleft,justifycenter,justifyright,justifyfull,|,styleselect,formatselect,fontselect,fontsizeselect",
            theme_advanced_buttons2: "cut,copy,paste,pastetext,pasteword,|,search,replace,|,bullist,numlist,|,outdent,indent,blockquote,|,undo,redo,|,link,unlink,anchor,image,cleanup,help,code,|,insertdate,inserttime,preview,|,forecolor,backcolor",
            theme_advanced_buttons3: "tablecontrols,|,hr,removeformat,visualaid,|,sub,sup,|,charmap,emotions,iespell,media,advhr,|,print,|,ltr,rtl,|,fullscreen",
            images_upload_url: "/Review/Upload",
            
        });


    }

    function configReviewIndexView(categoryId, statusId) {
        var currentPage = 1;
        var pageSize = 3;
        var $reviewsContainerSelector = $("#reviews-container");

        var filterPage = {
            categoryId : categoryId,
            statusId: statusId,
            currentPage: currentPage,
            pageSize : pageSize
        }

        getReviews(filterPage);

        function getReviews(filterPage) {

            var data = {
                CategoryId: filterPage.categoryId,
                StatusId: filterPage.statusId,
                Page: {
                    CurrentPage: filterPage.currentPage,
                    PageSize : filterPage.pageSize
                }
            };

            $.post("/Review/GetReviews",data).then(function (data) {
                $reviewsContainerSelector.html(data);
                var numberOfPages = parseInt($("#number-of-pages").val());
                paginationEvents(numberOfPages)

            })
        }

        function initEvents() {


            $("#categories-drowdown").on("change", function () {

                var categoryId = $("#categories-drowdown option:selected").val();
                var statusId = $("#statuses-dropdown option:selected").val();

                currentPage = 1;

                var filterPage = {
                    categoryId: categoryId,
                    statusId: statusId,
                    currentPage: currentPage,
                    pageSize: pageSize
                }
                getReviews(filterPage);
            });

            $("#statuses-drowdown").on("change", function () {

                var categoryId = $("#categories-drowdown option:selected").val();
                var statusId = $("#statuses-drowdown option:selected").val();

                currentPage = 1;

                var filterPage = {
                    categoryId: categoryId,
                    statusId: statusId,
                    currentPage: currentPage,
                    pageSize: pageSize
                }
                getReviews(filterPage);
            });

            var numberOfPages = parseInt($("#number-of-pages").val());
            paginationEvents(numberOfPages)

        }

        function paginationEvents(numberOfPages) {

            for (var i = 0; i < numberOfPages; i++) {
                var index = i + 1;
                if (currentPage == index) {
                    $("#page-button-" + index).parent().addClass("active")
                }
                $("#page-button-" + index).on("click", function () {
                    var value = $(this).attr("data");
                    currentPage = value
                    var categoryId = $("#categories-drowdown option:selected").val();
                    var statusId = $("#statuses-drowdown option:selected").val();
                    var filterPage = {
                        categoryId: categoryId,
                        statusId: statusId,
                        currentPage: currentPage,
                        pageSize: pageSize
                    }
                    getReviews(filterPage);
                })
            }
        }
        initEvents();

    }
    
    return {
        configReviewIndexView: configReviewIndexView,
        configReviewCreateView: configReviewCreateView
    }

}())