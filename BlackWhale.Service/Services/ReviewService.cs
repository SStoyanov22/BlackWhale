using System.Collections.Generic;
using System.Linq;
using BlackWhale.Core.DTO.Review;
using BlackWhale.Service.Interface;
using BlackWhale.Data.Interfaces;
using System;
using BlackWhale.Models.EntityModels;

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
                Id = r.Id,
                Description = r.Description

            }).ToList();

            return reviews;

        }

        public void CreateReview(CreateReviewDTO dto)
        {
            var review = new Review();

            review.Description = dto.Description;

            this.data.Reviews.Add(review);
            this.data.SaveChanges();
        }

    }
}
