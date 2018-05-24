namespace BlackWhale.Service.Services
{
    using BlackWhale.Core.DTO.Category;
    using BlackWhale.Data.Interfaces;
    using BlackWhale.Models.EntityModels;
    using BlackWhale.Service.Interface;
    using System.Collections.Generic;
    using System.Linq;
    using System;

    public class CategoryService : ICategoryService
    {
        private readonly IBlackWhaleData data;

        public CategoryService(IBlackWhaleData data)
        {
            this.data = data;
        }

        public void Create(CategoryCreateDTO dto)
        {
            if (this.data.Categories.All().Any(a => a.Title == dto.Title))
            {
                // add notification ( Notify)
            }
            else
            {
                var category = new Category();
                category.Title = dto.Title;

                this.data.Categories.Add(category);
                this.data.SaveChanges();
            }
            
        }
        public IEnumerable<CategoryDTO> GetAll()
        {
            var categories = this.data.Categories.All().Select(e => new CategoryDTO()
            {
                Id = e.Id,
                Title = e.Title

            }).ToList();

            return categories;
        }
    }
}
