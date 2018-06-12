namespace BlackWhale.Web.ViewModels.Comment
{
    using Commons.Mapper;
    using Core.DTO.Comment;

    public class EditCommentViewModel : IMapTo<CommentEditDTO>
    {
        public int Id { get; set; }

        public string Content { get; set; }
    }
}