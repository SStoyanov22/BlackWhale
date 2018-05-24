namespace BlackWhale.Web.ViewModels.Category
{
    using Commons.Mapper;
    using Core.DTO.Category;
    using System.ComponentModel.DataAnnotations;

    public class CategoryCreateViewModel : IMapTo<CategoryCreateDTO>
    {
        [Required]
        public string Title { get; set; }
    }
}