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

        public IEnumerable<ReviewDTO> GetAll()
        {
            var reviews = this.data.Reviews.All().Select(r => new ReviewDTO()
            {
                Id = r.Id,
                Article = r.Article,
                CommentsCount = r.Comments.Count

            }).ToList();

            return reviews;

        }

        public void Create(CreateReviewDTO dto)
        {
            var review = new ICOReview();

            review.Article = dto.Article;

            this.data.Reviews.Add(review);
            this.data.SaveChanges();
        }

    }
}
