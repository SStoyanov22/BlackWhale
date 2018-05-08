using System.Linq;

namespace BlackWhale.Web.Controllers
{
    using Service.Interface;
    using System.Web.Mvc;
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

            return View(reviews);
        }
    }
}