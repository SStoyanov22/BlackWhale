namespace BlackWhale.Service.Interface
{
    using System.Collections.Generic;
    using Core.DTO;

    public interface IReviewService
    {
        IEnumerable<ReviewDTO> GetAllReviews();
    }
}
