
namespace BlackWhale.Service.Interface
{
    using Core.DTO.Exchange;
    using System.Collections.Generic;

    public interface IExchangeService
    {
        IEnumerable<ExchangeDTO> GetAll();

        void Create(ExchangeCreateDTO dto);
    }
}
