﻿namespace BlackWhale.Web.Controllers
{
    using AutoMapper;
    using BlackWhale.Core.DTO.Category;
    using Service.Interface;
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
            var model = Mapper.Map<IEnumerable<CategoryIndexViewModel>>(categories);

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
            this.categoryService.Create(dto);

            return RedirectToAction(nameof(this.Index));

        }
    }
}