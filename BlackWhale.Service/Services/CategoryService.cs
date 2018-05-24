﻿namespace BlackWhale.Service.Services
{
    using BlackWhale.Core.DTO.Category;
    using BlackWhale.Data.Interfaces;
    using BlackWhale.Models.EntityModels;
    using BlackWhale.Service.Interface;
    using System.Collections.Generic;
    using System.Linq;
    using System;
    using Response;

    public class CategoryService : ICategoryService
    {
        private readonly IBlackWhaleData data;

        public CategoryService(IBlackWhaleData data)
        {
            this.data = data;
        }

        public IResponse Create(CategoryCreateDTO dto)
        {
            var response = new Response();

            if (this.data.Categories.All().Any(a => a.Title == dto.Title))
            {
                response.Status = ResponseStatus.Fail;
                response.Message = "A category with this title already exist";
                // add notification ( Notify)
                return response;
            }
            else
            {
                var category = new Category();
                category.Title = dto.Title;

                this.data.Categories.Add(category);
                this.data.SaveChanges();
            }

            response.Status = ResponseStatus.Success;
            return response;
        }
        public IResponse GetAll()
        {
            var response = new Response();

            var categories = this.data.Categories.All().Select(e => new CategoryDTO()
            {
                Id = e.Id,
                Title = e.Title

            }).ToList();

            response.Status = ResponseStatus.Success;
            response.ResultData = categories;

            return response;
        }
    }
}