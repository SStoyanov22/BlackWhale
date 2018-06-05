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
            var viewModel = Mapper.Map<IEnumerable<CommentIndexViewModel>>(comments);

            return PartialView("~/Views/Comments/_CommentsPartial.cshtml", viewModel);
        }

        [HttpGet]
        public ActionResult Create(int reviewId)
        {
            var viewModel = new CreateCommentViewModel();
            viewModel.ReviewId = reviewId;

            return PartialView("~/Views/Comments/_CreateCommentPartial.cshtml", viewModel);
        }

        [HttpPost]
        public ActionResult Create(CreateCommentViewModel model)
        {
            if (this.ModelState.IsValid)
            {
                var dto = Mapper.Map<CommentCreateDTO>(model);
                dto.Author = User.Identity.Name;

               var comment =  (CommentDTO) this.commentService.Create(dto).ResultData;
                var map = new List<CommentDTO>() { comment };

                var viewModel = Mapper.Map<IEnumerable<CommentIndexViewModel>>(map);
                return PartialView("~/Views/Comments/_CommentsPartial.cshtml", viewModel);
            }

            return Json(new { }, JsonRequestBehavior.AllowGet);

        }
    }
}