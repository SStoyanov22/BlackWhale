namespace BlackWhale.Web.ViewModels.Exchange
{
    using Commons.Mapper;
    using Core.DTO.Exchange;

    public class ExchangeIndexViewModel : IMapFrom<ExchangeDTO>
    {
        public int Id { get; set; }

        public string Name { get; set; }
    }
}