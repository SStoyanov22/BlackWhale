namespace BlackWhale.Web.ViewModels.Review
{
    using Commons.Mapper;
    using Core.DTO.Review;

    public class SortReviewModel : IMapTo<SortReviewDTO>
    {
        public int CategoryId { get; set; }

        public int StatusId { get; set; }
    }
}