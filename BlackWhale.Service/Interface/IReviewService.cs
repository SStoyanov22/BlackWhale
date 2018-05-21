namespace BlackWhale.Service.Interface
{
    using Core.DTO.Review;
    using System.Collections.Generic;

    public interface IReviewService
    {
        IEnumerable<ReviewDTO> GetAll();

        void Create(CreateReviewDTO dto);
    }
}
