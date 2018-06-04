namespace BlackWhale.Web.ViewModels.Comment
{
    using Commons.Mapper;
    using Core.DTO.Comment;
    using System;

    public class CommentIndexViewModel : IMapFrom<CommentDTO>, IMapTo<CommentDTO>
    {
        public int Id { get; set; }

        public int ReviewId { get; set; }

        public string Author { get; set; }

        public string Content { get; set; }

        public DateTime CreatedOn { get; set; }

        public bool isModified { get; set; }
    }
}