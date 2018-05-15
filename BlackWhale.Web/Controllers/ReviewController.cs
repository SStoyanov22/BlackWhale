using System.Linq;

namespace BlackWhale.Web.Controllers
{
    using AutoMapper;
    using Service.Interface;
    using System.Collections.Generic;
    using System.Web.Mvc;
    using ViewModels.Review;

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

            var viewModel = Mapper.Map<ICollection<ReviewIndexViewModel>>(reviews);

            return View(reviews);
        }
    }
}