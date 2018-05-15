namespace BlackWhale.Web.ViewModels.Review
{
    using BlackWhale.Commons.Mapper;
    using Core.DTO;

    public class ReviewIndexViewModel : IMapFrom<ReviewDTO>
    {
        public int Id { get; set; }
    }
}