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
    using ViewModels.Status;

    public class ReviewController : BaseController
    {
        private readonly IReviewService reviewService;
        private readonly ICategoryService categoryService;
        private readonly IStatusService statusService;

        public ReviewController(
            IReviewService reviewService,
            ICategoryService categoryService,
            IStatusService statusService)
        {
            this.reviewService = reviewService;
            this.categoryService = categoryService;
            this.statusService = statusService;
        }

        // GET: Review
        public ActionResult Index()
        {
            var model = new ReviewIndexPageViewModel();
            model.Categories = GetCategoriesDropDown();
            model.Statuses = GetStatusesDropDown();
            return View(model);
        }

        [HttpGet]
        public ActionResult GetReviews(SortReviewModel sort)
        {
            var sortDto = Mapper.Map<SortReviewDTO>(sort);
            var reviews = this.reviewService.GetAll(sortDto).ToList();

            var viewModel = Mapper.Map<IEnumerable<ReviewIndexViewModel>>(reviews);

            return PartialView("~/Views/Review/_ReviewsPartial.cshtml", viewModel);
        }

        public ActionResult Create()
        {
            var model = new ReviewCreateViewModel();
            model.Categories = GetCategoriesDropDown();
            model.Statuses = GetStatusesDropDown();

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

            var image = Request.Files[0];
            var fileName = Guid.NewGuid().ToString() + ".png";

            var dto = Mapper.Map<CreateReviewDTO>(model);

            SaveFile(image, fileName);
            dto.ImageUrl = fileName;
            dto.Reviewer = User.Identity.Name;

            this.reviewService.Create(dto);


            return RedirectToAction(nameof(this.Index));
        }

        [HttpPost]
        public ActionResult Upload(HttpPostedFileBase files)
        {
            var image = Request.Files[0];
            var fileName = Guid.NewGuid().ToString() + ".png";

            SaveFile(image, fileName);

            return Json(new { location = GlobalConstants.IMAGE_PATH + fileName });
        }

        [HttpGet]
        public ActionResult Details(int id)
        {
            var dto = this.reviewService.Details(id).ResultData;
            var model = Mapper.Map<ReviewDetailsViewModel>(dto);

            return this.View(model);
        }

        [HttpGet]
        public ActionResult Edit(int id)
        { 
            var review = this.reviewService.Details(id).ResultData;
            if (review != null)
            {
                var model = Mapper.Map<ReviewEditViewModel>(review);
                model.Statuses = GetStatusesDropDown();
                model.Categories = GetCategoriesDropDown();
                return this.View(model);
            }

            return RedirectToAction(nameof(this.Index));
        }

        [HttpPost]
        [ValidateInput(false)]
        public ActionResult Edit(ReviewEditViewModel model)
        {
            if (!this.ModelState.IsValid)
            {
                return this.View(model);
            }

            var image = Request.Files[0];
            var fileName = Guid.NewGuid().ToString() + ".png";

            var dto = Mapper.Map<EditReviewDTO>(model);
            if(image.ContentLength > 0)
            {
                SaveFile(image, fileName);
                dto.ImageUrl = fileName;
            }

            this.reviewService.Edit(dto);


            return RedirectToAction(nameof(this.Index));
        }

        private void SaveFile(HttpPostedFileBase image, string fileName)
        {
            if (image != null && image.ContentLength > 0)
            {
                string path = Server.MapPath("~" + GlobalConstants.IMAGE_PATH);

                if (!Directory.Exists(path))
                {
                    Directory.CreateDirectory(path);
                }

                image.SaveAs(path + Path.GetFileName(fileName));

            }
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

            categories.Insert(0, new SelectListItem()
            {
                Text = "(All)",
                Value = "0"
            });

            return categories;
        }

        private List<SelectListItem> GetStatusesDropDown()
        {
            var result = this.statusService.GetAll().ResultData;

            var statuses = Mapper.Map<List<StatusIndexViewModel>>(result)
                .Select(c => new SelectListItem
                {
                    Text = c.Description,
                    Value = c.Id.ToString()
                }).ToList();

            statuses.Insert(0, new SelectListItem()
            {
                Text = "(All)",
                Value = "0"
            });


            return statuses;
        }
    }
}