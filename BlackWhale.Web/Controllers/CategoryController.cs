﻿namespace BlackWhale.Web.Controllers
{
    using AutoMapper;
    using BlackWhale.Core.DTO.Category;
    using Service.Interface;
    using Service.Response;
    using System.Collections.Generic;
    using System.Web.Mvc;
    using ViewModels.Category;

    public class CategoryController : BaseController
    {
        private readonly ICategoryService categoryService;

        public CategoryController(ICategoryService categoryService)
        {
            this.categoryService = categoryService;
        }

        [HttpGet]
        public ActionResult Index()
        {
            var categories = this.categoryService.GetAll();
            var model = Mapper.Map<IEnumerable<CategoryIndexViewModel>>(categories.ResultData);

            return View(model);
        }

        [HttpGet]
        public ActionResult Create()
        {
            return this.View();
        }

        [HttpPost]
        public ActionResult Create(CategoryCreateViewModel model)
        {
            if (!this.ModelState.IsValid)
            {
                return this.View(model);
            }

            var dto = Mapper.Map<CategoryCreateDTO>(model);
            var result =  this.categoryService.Create(dto);

            if (result.Status == ResponseStatus.Fail)
            {
                return RedirectToAction(nameof(this.Create));
            }

            return RedirectToAction(nameof(this.Index));

        }
    }
}