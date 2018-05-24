namespace BlackWhale.Service.Interface
{
    using BlackWhale.Core.DTO.Category;
    using System.Collections.Generic;

    public interface ICategoryService
    {
        IEnumerable<CategoryDTO> GetAll();

        void Create(CategoryCreateDTO dto);
    }
}
