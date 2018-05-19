namespace BlackWhale.Web.ViewModels.Review
{
    using Commons.Mapper;
    using Core.DTO.Review;
    using GitHubReview;
    using System.ComponentModel.DataAnnotations;

    public class ReviewCreateViewModel : IMapTo<CreateReviewDTO>
    {
        [Required]
        public string Description { get; set; }

    }
}