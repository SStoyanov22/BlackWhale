namespace BlackWhale.Web.ViewModels.Exchange
{
    using Commons.Mapper;
    using Core.DTO.Exchange;
    using System.ComponentModel.DataAnnotations;

    public class ExchangeCreateViewModel : IMapFrom<ExchangeIndexViewModel>, IMapTo<ExchangeCreateDTO>
    {
        [Required]
        public string Name { get; set; }
    }
}