namespace BlackWhale.Web.Controllers
{
    using AutoMapper;
    using Core.DTO.Review;
    using Service.Interface;
    using System.Collections.Generic;
    using System.Web.Mvc;
    using ViewModels.Review;
    using System.Linq;

    public class ReviewController : Controller
    {
        private readonly IReviewService reviewService;

        public ReviewController(IReviewService reviewService)
        {
            this.reviewService = reviewService;
        }

        // GET: Review
        public ActionResult Index()
        {
            var reviews = this.reviewService.GetAllReviews().ToList();

            var viewModel = Mapper.Map<IEnumerable<ReviewIndexViewModel>>(reviews);

            return View(viewModel);
        }

        public ActionResult Create()
        {
            return this.View();
        }

        [HttpPost]
        public ActionResult Create(ReviewCreateViewModel model)
        {
            if (!this.ModelState.IsValid)
            {
                return this.View(model);
            }

            var dto = Mapper.Map<CreateReviewDTO>(model);
            this.reviewService.CreateReview(dto);

            return RedirectToAction(nameof(this.Index));
        }
    }
}