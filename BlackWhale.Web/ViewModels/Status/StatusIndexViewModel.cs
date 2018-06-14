namespace BlackWhale.Web.ViewModels.Status
{
    using Commons.Mapper;
    using Core.DTO.Status;

    public class StatusIndexViewModel : IMapFrom<StatusDTO>
    {
        public int Id { get; set; }

        public string Description { get; set; }
    }
}