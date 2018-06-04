namespace BlackWhale.Web.ViewModels.Review
{
    using System;
    using BlackWhale.Core.DTO.Review;
    using Commons.Mapper;
    using System.Web.Mvc;
    public class ReviewDetailsViewModel : IMapTo<DetailsReviewDTO>
    {
        public int Id { get; set; }


        public string Title { get; set; }

        public string Category { get; set; }

        public string Status { get; set; }

        [AllowHtml]
        public string Article { get; set; }

        [AllowHtml]
        public string Description { get; set; }

        public int CountDolphins { get; set; }

        public int CountWhales { get; set; }

        public int CountShrimps { get; set; }

        public int CountPass { get; set; }

        public int CommentsCount { get; set; }

        public int Views { get; set; }

        //public virtual GitHubReview GitHubReview { get; set; }

        public bool IsHidden { get; set; }

        public string Reviewer { get; set; }

        //public virtual ICollection<Comment> Comments { get; set; }

        public DateTime LastUpdated { get; set; }
    }
}