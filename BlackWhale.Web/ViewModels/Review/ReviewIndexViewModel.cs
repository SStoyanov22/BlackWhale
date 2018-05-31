namespace BlackWhale.Web.ViewModels.Review
{
    using Commons.Mapper;
    using Core.DTO.Review;

    public class ReviewIndexViewModel : IMapTo<ReviewDTO>, IMapFrom<ReviewDTO>
    {
        public int Id { get; set; }

        public string Article { get; set; }

    }
}