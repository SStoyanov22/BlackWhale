namespace BlackWhale.Web.ViewModels.Review
{
    using Commons.Mapper;
    using Core.DTO.Review;
    using System;
    public class ReviewIndexViewModel : IMapTo<ReviewDTO>, IMapFrom<ReviewDTO>
    {
        public int Id { get; set; }

        public string Title { get; set; }

        public string Description { get; set; }

        public string ImageUrl { get; set; }

        public string Article { get; set; }

        public string Reviewer { get; set; }

        public int CommentsCount { get; set; }

        public DateTime  LastUpdated { get; set; }

        public string Status { get; set; }

        public string Category { get; set; }

        public int Views { get; set; }
    }
}