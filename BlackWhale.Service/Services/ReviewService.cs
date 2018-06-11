
namespace BlackWhale.Service.Services
{
using System.Collections.Generic;
using System.Linq;
using BlackWhale.Core.DTO.Review;
using BlackWhale.Service.Interface;
using BlackWhale.Data.Interfaces;
using System;
using BlackWhale.Models.EntityModels;
    using BlackWhale.Service.Response;
    using Response;

    public class ReviewService : IReviewService
    {
        private readonly IBlackWhaleData data;

        public ReviewService(IBlackWhaleData data)
        {
            this.data = data;
        }

        public IEnumerable<ReviewDTO> GetAll()
        {
            try
            {
                var reviews = this.data.Reviews.All().Select(r => new ReviewDTO()
                {
                    Id = r.Id,
                    Description = r.Article,
                    Category = r.Category.Title,
                    LastUpdated = r.LastUpdated,
                    Status = r.Status.Description,
                    CommentsCount = r.Comments.Count,
                    Views = r.Views

                }).ToList();

                return reviews;
            }
            catch (Exception ex)
            {

                throw;
            }

        }

        public IResponse Create(CreateReviewDTO dto)
        {
            var response = new Response();
            if (dto != null)
        {
                response.Status = ResponseStatus.Success;
                response.ResultData = dto;
            var review = new ICOReview();

            review.Article = dto.Article;

            this.data.Reviews.Add(review);
            this.data.SaveChanges();
                return response;
            }

            response.Status = ResponseStatus.Fail;
            return response;

        }

        public IResponse Details(int id)
        {

            var response = new Response();

            var review = this.data.Reviews.All().FirstOrDefault(r => r.Id == id);
            if (review != null)
            {
                var dto = new DetailsReviewDTO()
                {
                    Id = review.Id,
                    Title = review.Title,
                    Description = review.Description,
                    CommentsCount = review.Comments.ToList().Count,
                    LastUpdated = review.LastUpdated,
                    Views = review.Views,
                    CountDolphins = review.CountDolphins,
                    CountPass = review.CountPass,
                    CountShrimps = review.CountShrimps,
                    CountWhales = review.CountWhales
                };

                response.Status = ResponseStatus.Success;
                response.ResultData = dto;

                return response;
        }

            response.Status = ResponseStatus.Fail;
            response.Message = "There is no Review matching the provided Id!";
            return response;
        }
    }
}
