namespace BlackWhale.Service.Interface
{
    using BlackWhale.Core.DTO.Category;
    using Response;
    using System.Collections.Generic;

    public interface ICategoryService
    {
        IResponse GetAll();

        IResponse Create(CategoryCreateDTO dto);
    }
}
