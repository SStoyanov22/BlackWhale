using BlackWhale.Commons.Mapper;
using BlackWhale.Core.DTO.Comment;

namespace BlackWhale.Web.ViewModels.Comment
{
    public class CreateCommentViewModel : IMapTo<CommentCreateDTO>
    {
        public int ReviewId { get; set; }

        public string Content { get; set; }
    }
}