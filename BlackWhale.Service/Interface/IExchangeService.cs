namespace BlackWhale.Service.Interface
{
    using Core.DTO.Exchange;
    using Response;

    public interface IExchangeService
    {
        IResponse GetAll();

        IResponse Create(ExchangeCreateDTO dto);

        IResponse Edit(ExchangeEditDTO dto);

        IResponse GetById(int id);

        IResponse Delete(int id);
    }
}
