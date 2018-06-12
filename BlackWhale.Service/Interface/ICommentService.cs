namespace BlackWhale.Service.Interface
{
    using Response;
    using Core.DTO.Comment;

    public interface ICommentService
    {
        IResponse GetById(int Id);

        IResponse GetAll(int reviewId);

        IResponse Create(CommentCreateDTO dto);

        IResponse Edit(CommentEditDTO dto);

        IResponse Delete(int id);
    }
}
