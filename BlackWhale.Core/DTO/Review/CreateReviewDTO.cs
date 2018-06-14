namespace BlackWhale.Core.DTO.Review
{
    public class CreateReviewDTO
    {
        public string Title { get; set; }

        public string Reviewer { get; set; }

        public string ImageUrl { get; set; }

        public string Article { get; set; }

        public string Description { get; set; }

        public int CategoryId { get; set; }

        public int StatusId { get; set; }

    }
}
