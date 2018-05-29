var reviewModule = (function () {

    function configReviewCreateView() {

        tinymce.init({
            selector: '#review-text-area',
            height: 200,
            theme: 'modern',
            plugins: 'print preview fullpage searchreplace autolink directionality visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists textcolor wordcount imagetools contextmenu colorpicker textpattern help',
            toolbar1: 'formatselect | bold italic strikethrough forecolor backcolor | link | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent  | removeformat',
            image_advtab: true,
            templates: [
              { title: 'Test template 1', content: '<div class="quote-wrap irow-xs highlight highlight-light"><div class="col-xs-4 col-sm-offset-1"><img src="http://media.aisconverse.com/images/persons/person-3.jpg" class="img-circle" alt=""></div><div class="col-sm-6 col-xs-8 middle" style="margin-top: 0px;"><blockquote><h4>Game snake applies to the general game design original was not named snake</h4></blockquote><h5>Sam Newton <small>Creative Systems, Founder</small></h5></div></div>' },
              { title: 'Test template 2', content: 'Test 2' }
            ],
            content_css: [
              '//fonts.googleapis.com/css?family=Lato:300,300i,400,400i',
              '//www.tinymce.com/css/codepen.min.css'
            ],theme_advanced_buttons1 : "save,newdocument,|,bold,italic,underline,strikethrough,|,justifyleft,justifycenter,justifyright,justifyfull,|,styleselect,formatselect,fontselect,fontsizeselect",
        theme_advanced_buttons2 : "cut,copy,paste,pastetext,pasteword,|,search,replace,|,bullist,numlist,|,outdent,indent,blockquote,|,undo,redo,|,link,unlink,anchor,image,cleanup,help,code,|,insertdate,inserttime,preview,|,forecolor,backcolor",
        theme_advanced_buttons3 : "tablecontrols,|,hr,removeformat,visualaid,|,sub,sup,|,charmap,emotions,iespell,media,advhr,|,print,|,ltr,rtl,|,fullscreen",
        });
    }

    return {
        configReviewCreateView: configReviewCreateView
    }

}())