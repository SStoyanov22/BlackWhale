namespace BlackWhale.Service.Services
{
    using Response;
    using Interface;
    using Data.Interfaces;
    using System.Linq;
    using Core.DTO.Status;

    public class StatusService : IStatusService
    {
        private readonly IBlackWhaleData data;

        public StatusService(IBlackWhaleData data)
        {
            this.data = data;
        }

        public IResponse GetAll()
        {
            var response = new Response();

            var statuses = this.data.Statuses.All().Select(s => new StatusDTO
            {
                Id = s.Id,
                Description = s.Description
            });

            response.ResultData = statuses;
            response.Status = ResponseStatus.Success;

            return response;
        }

        public IResponse GetById(int id)
        {
            var response = new Response();

            var status = this.data.Statuses.Find(id);

            if (status != null)
            {
                response.ResultData = status;
                response.Status = ResponseStatus.Success;

                return response;
            }

            response.Status = ResponseStatus.Fail;
            response.Message = string.Format("Status with id : {0} can not be found", id);

            return response;
        }
    }
}
