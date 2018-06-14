namespace BlackWhale.Service.Interface
{
    using Core.DTO.Review;
    using Response;
    using System.Collections.Generic;

    public interface IReviewService
    {
        IEnumerable<ReviewDTO> GetAll(SortReviewDTO sort);

        IResponse Create(CreateReviewDTO dto);

        IResponse Details(int id);

        IResponse Edit(EditReviewDTO dto);
      
    }
}
