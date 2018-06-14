
namespace BlackWhale.Service.Interface
{
    using Response;

    public interface IStatusService
    {
        IResponse GetAll();

        IResponse GetById(int id);

    }
}
