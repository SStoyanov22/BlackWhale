namespace BlackWhale.Web.ViewModels.Review
{
    using System;
    using Core.DTO.Review;
    using Commons.Mapper;
    using System.Web.Mvc;
    public class ReviewDetailsViewModel : IMapTo<DetailsReviewDTO>, IMapFrom<DetailsReviewDTO>
    {
        public int Id { get; set; }

        public string Title { get; set; }

        public string Category { get; set; }

        public string Status { get; set; }

        [AllowHtml]
        public string Article { get; set; }

        public int CommentsCount { get; set; }

        public int Views { get; set; }

        public bool IsHidden { get; set; }

        public string Reviewer { get; set; }

        public DateTime LastUpdated { get; set; }
    }
}