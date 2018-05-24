namespace BlackWhale.Web.ViewModels.Exchange
{
    using BlackWhale.Commons.Mapper;
    using BlackWhale.Core.DTO.Exchange;

    public class ExchangeEditViewModel: IMapTo<ExchangeEditDTO>, IMapFrom<ExchangeDTO>
    {
        public int Id { get; set; }

        public string Name { get; set; }
    }
}