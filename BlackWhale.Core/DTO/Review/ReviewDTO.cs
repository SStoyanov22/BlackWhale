namespace BlackWhale.Core.DTO.Review
{
    using System;

    public class ReviewDTO
    {
        public int Id { get; set; }

        public string Title { get; set; }

        public string Description { get; set; }

        public string ImageUrl { get; set; }

        public string Article { get; set; }

        public string Reviewer { get; set; }

        public string Category { get; set; }

        public int CommentsCount { get; set; }

        public string Status { get; set; }

        public DateTime LastUpdated { get; set; }

        public int Views { get; set; }
    }
}
