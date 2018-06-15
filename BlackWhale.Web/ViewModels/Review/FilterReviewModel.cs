namespace BlackWhale.Web.ViewModels.Review
{
    using Commons.Mapper;
    using Core.DTO.Review;

    public class FilterReviewModel : IMapTo<FilterReviewDTO>
    {
        public int CategoryId { get; set; }

        public int StatusId { get; set; }

        public PageViewModel Page{ get; set; }
    }
}