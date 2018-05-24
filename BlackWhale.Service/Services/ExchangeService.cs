namespace BlackWhale.Service.Services
{
    using Core.DTO.Exchange;
    using Interface;
    using Data.Interfaces;
    using System.Linq;
    using Models.EntityModels;
    using Response;

    public class ExchangeService : IExchangeService
    {
        private readonly IBlackWhaleData data;

        public ExchangeService(IBlackWhaleData data)
        {
            this.data = data;
        }

        public IResponse Delete(int id)
        {
            var response = new Response();
            var exchange = this.data.Exchanges.All().FirstOrDefault(c => c.Id == id);

            if (exchange != null)
            {
                response.Status = ResponseStatus.Success;
                response.Message = string.Format("Exchange with Id = {0} was deleted", id);
                this.data.Exchanges.Delete(exchange);
                this.data.SaveChanges();

                return response;
            }

            response.Status = ResponseStatus.Fail;
            response.Message = "There is no Exchange matching the provided Id!";
            return response;
        }

        public IResponse Edit(ExchangeEditDTO dto)
        {
            var response = new Response();
            var exchange = this.data.Exchanges.All().FirstOrDefault(a => a.Id == dto.Id);

            if (exchange != null)
            {
                exchange.Name = dto.Name;
            }
            this.data.SaveChanges();


            response.Status = ResponseStatus.Success;
            return response;
        }

        public IResponse GetById(int id)
        {
            var response = new Response();

            var exchange = this.data.Exchanges.All().FirstOrDefault(c => c.Id == id);
            if (exchange != null)
            {
                var dto = new ExchangeDTO()
                {
                    Id = exchange.Id,
                    Name = exchange.Name
                };

                response.Status = ResponseStatus.Success;
                response.ResultData = dto;

                return response;
            }

            response.Status = ResponseStatus.Fail;
            response.Message = "There is no Exchange matching the provided Id!";
            return response;
        }

        public IResponse Create(ExchangeCreateDTO dto)
        {
            var response = new Response();

            if (this.data.Exchanges.All().Any(a => a.Name == dto.Name))
            {
                response.Status = ResponseStatus.Fail;
                response.Message = "An exchange with this title already exist";
                // add notification ( Notify)
                return response;
            }
            else
            {
                var exchange = new Exchange();
                exchange.Name = dto.Name;

                this.data.Exchanges.Add(exchange);
                this.data.SaveChanges();
            }

            response.Status = ResponseStatus.Success;
            return response;
        }

        public IResponse GetAll()
        {
            var response = new Response();

            var exchanges = this.data.Exchanges.All().Select(e => new ExchangeDTO()
            {
                Id = e.Id,
                Name = e.Name

            }).ToList();

            response.Status = ResponseStatus.Success;
            response.ResultData = exchanges;

            return response;
        }
    }
}
