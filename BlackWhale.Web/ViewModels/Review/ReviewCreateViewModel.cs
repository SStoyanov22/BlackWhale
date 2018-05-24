namespace BlackWhale.Web.ViewModels.Review
{
    using Commons.Mapper;
    using Core.DTO.Review;
    using GitHubReview;
    using System.ComponentModel.DataAnnotations;
    using System.Web.Mvc;

    public class ReviewCreateViewModel : IMapTo<CreateReviewDTO>
    {
        [Required]
        [AllowHtml]
        public string Description { get; set; }

    }
}