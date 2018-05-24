namespace BlackWhale.Web.ViewModels.Category
{
    using BlackWhale.Commons.Mapper;
    using BlackWhale.Core.DTO.Category;

    public class CategoryIndexViewModel: IMapFrom<CategoryDTO>
    {
        public int Id { get; set; }

        public string Title { get; set; }
    }
}