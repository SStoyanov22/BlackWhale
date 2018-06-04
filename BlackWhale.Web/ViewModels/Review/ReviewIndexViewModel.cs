namespace BlackWhale.Web.ViewModels.Review
{
    using Commons.Mapper;
    using Core.DTO.Review;
    using System;
    public class ReviewIndexViewModel : IMapTo<ReviewDTO>, IMapFrom<ReviewDTO>
    {
        public int Id { get; set; }

        public string Description { get; set; }

        public string Author { get; set; }

        public int CommentsCount { get; set; }

        public DateTime  LastUpdated { get; set; }

        public string Status { get; set; }

        public string Category { get; set; }

        public int Views { get; set; }
    }
}