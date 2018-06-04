namespace BlackWhale.Service.Interface
{
    using Core.DTO.Review;
    using Response;
    using System.Collections.Generic;

    public interface IReviewService
    {
        IEnumerable<ReviewDTO> GetAll();

        IResponse Create(CreateReviewDTO dto);

        IResponse Details(int id);

      
    }
}
