namespace BlackWhale.Service.CommentService
{
    using System;
    using Core.DTO.Comment;
    using Interface;
    using Models.EntityModels;
    using Response;
    using Data.Interfaces;
    using System.Linq;

    public class CommentService : ICommentService
    {
        private readonly IBlackWhaleData data;

        public CommentService(IBlackWhaleData data)
        {
            this.data = data;
        }

        public IResponse Create(CommentCreateDTO dto)
        {
            var comment = new Comment()
            {
                Content = dto.Content,
                Author = this.data.Users.All().FirstOrDefault(u => u.UserName == dto.Author),
                CreatedOn = DateTime.UtcNow,
                Review = this.data.Reviews.All().FirstOrDefault(r => r.Id == dto.ReviewId),
                IsModified = false
            };

            this.data.Comments.Add(comment);
            this.data.SaveChanges();

            var response = new Response();
            response.ResultData = new CommentDTO()
            {
                Id = comment.Id,
                Author = comment.Author.UserName,
                Content = comment.Content,
                CreatedOn = comment.CreatedOn,
                ReviewId = comment.Review.Id
            };

            return response;
        }

        public IResponse Delete(int id)
        {
            var responce = new Response();
            var comment = this.data.Comments.Find(id);

            if (comment != null)
            {
                this.data.Comments.Delete(comment);
                this.data.SaveChanges();

                responce.Status = ResponseStatus.Success;
                responce.Message = "Coment is successfully deleted";

                return responce;
            }

            responce.Message = "Delete of this comment failed";
            responce.Status = ResponseStatus.Fail;

            return responce;
        }

        public IResponse Edit(CommentEditDTO dto)
        {
            var responce = new Response();
            var comment = this.data.Comments.Find(dto.Id);

            if (comment != null)
            {
                comment.Content = dto.Content;
                comment.IsModified = true;

                this.data.Comments.Update(comment);
                this.data.SaveChanges();

                responce.Status = ResponseStatus.Success;
                responce.Message = "Coment is successfully edited";

                return responce;
            }

            responce.Status = ResponseStatus.Fail;
            responce.Message = "Edit of this comment failed";

            return responce;

        }

        public IResponse GetAll(int reviewId)
        {
            var responce = new Response();

            var comments = this.data.Comments.All()
                .Where(c => c.Review.Id == reviewId)
                .Select(c => new CommentDTO
                {
                    Id = c.Id,
                    Author = c.Author.UserName,
                    Content = c.Content,
                    CreatedOn = c.CreatedOn,
                    ReviewId = c.Review.Id
                });

            responce.ResultData = comments;

            return responce;

        }
    }
}
