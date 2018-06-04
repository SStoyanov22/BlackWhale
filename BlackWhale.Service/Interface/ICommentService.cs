namespace BlackWhale.Service.Interface
{
    using BlackWhale.Service.Response;
    using Core.DTO.Comment;

    public interface ICommentService
    {
        IResponse GetAll(int reviewId);

        IResponse Create(CommentCreateDTO dto);

        IResponse Edit(CommentEditDTO dto);

        IResponse Delete(int id);
    }
}
