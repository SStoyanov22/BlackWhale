using System.Collections.Generic;
using System.Linq;
using BlackWhale.Core.DTO;
using BlackWhale.Data;
using BlackWhale.Service.Interface;

namespace BlackWhale.Service.Services
{
    public class ReviewService : IReviewService
    {
        private readonly BlackWhaleDbContext context;

        public ReviewService()
        {
            this.context = new BlackWhaleDbContext();
        }

        public IEnumerable<ReviewDTO> GetAllReviews()
        {
            var reviews = this.context.Reviews.Select(r => new ReviewDTO()
            {
                Id =  r.Id
            });

            return reviews;

        }
    }
}
