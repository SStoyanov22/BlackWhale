namespace BlackWhale.Web.Controllers
{
    using AutoMapper;
    using Core.DTO.Review;
    using Service.Interface;
    using System.Collections.Generic;
    using System.Web.Mvc;
    using ViewModels.Review;
    using System.Linq;
    using System.Web;
    using System.IO;
    using Commons.Constants;
    using System;
    using ViewModels.Category;

    public class ReviewController : BaseController
    {
        private readonly IReviewService reviewService;
        private readonly ICategoryService categoryService;

        public ReviewController(
            IReviewService reviewService,
            ICategoryService categoryService)
        {
            this.reviewService = reviewService;
            this.categoryService = categoryService;
        }

        // GET: Review
        public ActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public ActionResult GetReviews()
        {
            var reviews = this.reviewService.GetAll().ToList();

            var viewModel = Mapper.Map<IEnumerable<ReviewIndexViewModel>>(reviews);

            return PartialView("~/Views/Review/_ReviewsPartial.cshtml", viewModel);
        }

        public ActionResult Create()
        {
            var model = new ReviewCreateViewModel();
            model.Categories = GetCategoriesDropDown();

            return this.View(model);
        }

        [HttpPost]
        [ValidateInput(false)]
        public ActionResult Create(ReviewCreateViewModel model)
        {
            if (!this.ModelState.IsValid)
            {
                return this.View(model);
            }

            var dto = Mapper.Map<CreateReviewDTO>(model);
            this.reviewService.Create(dto);

            return RedirectToAction(nameof(this.Index));
        }

        [HttpPost]
        public ActionResult Upload(HttpPostedFileBase files)
        {
            var image = Request.Files[0];
            var fileName = Guid.NewGuid().ToString() + ".png";

            if (image != null)
            {
                string path = Server.MapPath("~" + GlobalConstants.IMAGE_PATH);

                if (!Directory.Exists(path))
                {
                    Directory.CreateDirectory(path);
                }

                image.SaveAs(path + Path.GetFileName(fileName));

            }

            return Json(new { location = GlobalConstants.IMAGE_PATH + fileName });
        }

        [HttpGet]
        public ActionResult Details(int id)
        {
            var dto = this.reviewService.Details(id).ResultData;
            var model = Mapper.Map<ReviewDetailsViewModel>(dto);

            return this.View(model);
        }

        private List<SelectListItem> GetCategoriesDropDown()
        {
            var result = this.categoryService.GetAll().ResultData;

            var categories = Mapper.Map<List<CategoryIndexViewModel>>(result)
                .Select(c => new SelectListItem
                {
                    Text = c.Title,
                    Value = c.Id.ToString()
                }).ToList();

            return categories;
        }
    }
}