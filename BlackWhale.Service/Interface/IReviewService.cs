namespace BlackWhale.Service.Interface
{
    using System.Collections.Generic;
    using Core.DTO.Review;

    public interface IReviewService
    {
        IEnumerable<ReviewDTO> GetAllReviews();

        void CreateReview(CreateReviewDTO dto);
    }
}
