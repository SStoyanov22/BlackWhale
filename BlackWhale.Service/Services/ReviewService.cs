using System.Collections.Generic;
using System.Linq;
using BlackWhale.Core.DTO;
using BlackWhale.Data;
using BlackWhale.Service.Interface;
using BlackWhale.Data.Interfaces;

namespace BlackWhale.Service.Services
{
    public class ReviewService : IReviewService
    {
        private readonly IBlackWhaleData data;

        public ReviewService(IBlackWhaleData data)
        {
            this.data = data;
        }

        public IEnumerable<ReviewDTO> GetAllReviews()
        {
            var reviews = this.data.Reviews.All().Select(r => new ReviewDTO()
            {
                Id = r.Id

            }).ToList();

            return reviews;

        }
    }
}
