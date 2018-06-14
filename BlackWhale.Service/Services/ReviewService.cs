namespace BlackWhale.Service.Services
{
    using System.Collections.Generic;
    using System.Linq;
    using Core.DTO.Review;
    using Interface;
    using Data.Interfaces;
    using System;
    using Models.EntityModels;
    using Response;
    using System.Linq.Expressions;

    public class ReviewService : IReviewService
    {
        private readonly IBlackWhaleData data;

        public ReviewService(IBlackWhaleData data)
        {
            this.data = data;
        }

        public IEnumerable<ReviewDTO> GetAll(SortReviewDTO sort)
        {
            var expression = SortByCriteria(sort);
            var reviews = this.data.Reviews.All().Where(expression).Select(r => new ReviewDTO()
            {
                Id = r.Id,
                Reviewer = r.Reviewer.UserName,
                Description = r.Description,
                Title = r.Title,
                ImageUrl = r.ImageUrl,
                Article = r.Article,
                Category = r.Category.Title,
                LastUpdated = r.LastUpdated,
                Status = r.Status.Description,
                CommentsCount = r.Comments.Count,
                Views = r.Views

            }).ToList();

            return reviews;

        }

        private static Expression<Func<ICOReview, bool>> SortByCriteria(SortReviewDTO sort)
        {
            if (sort.CategoryId > 0 && sort.StatusId > 0)
            {
                return c => c.CategoryId == sort.CategoryId && c.StatusId == sort.StatusId;
            }
            if (sort.CategoryId > 0)
            {
                return c => c.CategoryId == sort.CategoryId;
            }

            if (sort.StatusId > 0)
            {
                return c => c.StatusId == sort.StatusId;
            }

            return c => true;

        }

        public IResponse Create(CreateReviewDTO dto)
        {
            var response = new Response();
            if (dto != null)
            {

                var review = new ICOReview();

                review.Article = dto.Article;
                review.Reviewer = this.data.Users.All().FirstOrDefault(u => u.Email == dto.Reviewer);
                review.ImageUrl = dto.ImageUrl;
                review.Description = dto.Description;
                review.Title = dto.Title;
                review.CategoryId = dto.CategoryId;
                review.StatusId = dto.StatusId;
                review.LastUpdated = DateTime.Now;

                this.data.Reviews.Add(review);
                this.data.SaveChanges();

                response.Status = ResponseStatus.Success;
                response.ResultData = review;

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
                    ImageUrl = review.ImageUrl,
                    Reviewer = review.Reviewer.UserName,
                    Description = review.Description,
                    Title = review.Title,
                    Article = review.Article,
                    Category = review.Category.Title,
                    CategoryId = review.CategoryId,
                    StatusId = review.StatusId,
                    LastUpdated = review.LastUpdated,
                    Status = review.Status.Description,
                    Views = review.Views
                };

                response.Status = ResponseStatus.Success;
                response.ResultData = dto;

                return response;
            }

            response.Status = ResponseStatus.Fail;
            response.Message = "There is no Review matching the provided Id!";
            return response;
        }

        public IResponse Edit(EditReviewDTO dto)
        {
            var response = new Response();

            var review = this.data.Reviews.Find(dto.Id);

            if (review != null)
            {
                review.Article = dto.Article;
                review.ImageUrl = dto.ImageUrl;
                review.Description = dto.Description;
                review.Title = dto.Title;
                review.CategoryId = dto.CategoryId;
                review.StatusId = dto.StatusId;
                review.LastUpdated = DateTime.Now;

                this.data.Reviews.Update(review);
                this.data.SaveChanges();

                response.Status = ResponseStatus.Success;
                response.ResultData = review;

                return response;
            }

            response.Status = ResponseStatus.Fail;

            return response;

        }
    }
}
