namespace BlackWhale.Service.Interface
{
    using Core.DTO.Review;
    using Response;
    using System.Collections.Generic;

    public interface IReviewService
    {
        IEnumerable<ReviewDTO> GetAll(/*FilterReviewDTO sort*/);

        IResponse Create(CreateReviewDTO dto);

        IResponse Details(int id);

        IResponse Edit(EditReviewDTO dto);
      
    }
}
