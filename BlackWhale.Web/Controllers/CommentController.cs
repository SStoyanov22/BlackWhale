namespace BlackWhale.Web.Controllers
{
    using AutoMapper;
    using Core.DTO.Comment;
    using Service.Interface;
    using System.Collections.Generic;
    using System.Web.Mvc;
    using ViewModels.Comment;

    public class CommentController : BaseController
    {
        private readonly ICommentService commentService;

        public CommentController(ICommentService commentService)
        {
            this.commentService = commentService;
        }

        [HttpGet]
        public ActionResult GetCommentsForReview(int reviewId)
        {
            var comments = this.commentService.GetAll(reviewId).ResultData;
            var commentsViewModel = Mapper.Map<IEnumerable<CommentIndexViewModel>>(comments);
            var wrapperViewModel = new CommentIndexWrapperViewModel();

            wrapperViewModel.Comments = commentsViewModel;
            wrapperViewModel.ReviewId = reviewId;

            return this.Json(commentsViewModel, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        [Authorize]
        public ActionResult Create(CreateCommentViewModel model)
        {
            if (this.ModelState.IsValid)
            {
                var dto = Mapper.Map<CommentCreateDTO>(model);
                dto.Author = User.Identity.Name;

               var comment =  (CommentDTO) this.commentService.Create(dto).ResultData;

                var viewModel = Mapper.Map<CommentIndexViewModel>(comment);
                return PartialView("~/Views/Comments/_CommentPartial.cshtml", viewModel);
            }

            return Json(new { }, JsonRequestBehavior.AllowGet);

        }

        [HttpPost]
        [Authorize]
        public ActionResult Edit(EditCommentViewModel model)
        {
            if (this.ModelState.IsValid)
            {
                var dto = Mapper.Map<CommentEditDTO>(model);

                var comment = (CommentDTO)this.commentService.Edit(dto).ResultData;

                var viewModel = Mapper.Map<CommentIndexViewModel>(comment);
                return PartialView("~/Views/Comments/_CommentPartial.cshtml", viewModel);
            }

            return Json(new { }, JsonRequestBehavior.AllowGet);

        }

        [HttpPost]
        [Authorize]
        public ActionResult Delete(int id)
        {
            var comment = this.commentService.GetById(id).ResultData;

            if (comment!=null)
            {
                this.commentService.Delete(id);
                return Json(new { }, JsonRequestBehavior.AllowGet);
            }

            return Json(new { }, JsonRequestBehavior.AllowGet);
        }
    }
}