namespace BlackWhale.Service.Services
{
    using System.Collections.Generic;
    using Core.DTO.Exchange;
    using Interface;
    using Data.Interfaces;
    using System.Linq;
    using Models.EntityModels;

    public class ExchangeService : IExchangeService
    {
        private readonly IBlackWhaleData data;

        public ExchangeService(IBlackWhaleData data)
        {
            this.data = data;
        }

        public void Create(ExchangeCreateDTO dto)
        {
            var exchange = new Exchange();
            exchange.Name = dto.Name;

            this.data.Exchanges.Add(exchange);
            this.data.SaveChanges();
        }

        public IEnumerable<ExchangeDTO> GetAll()
        {
            var exchanges = this.data.Exchanges.All().Select(e => new ExchangeDTO()
            {
                Id = e.Id,
                Name = e.Name

            }).ToList();

            return exchanges;
        }
    }
}
