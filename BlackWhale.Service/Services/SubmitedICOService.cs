namespace BlackWhale.Service.Services
{
    using System.Linq;
    using Core.DTO.SubmitedICO;
    using Interface;
    using Data.Interfaces;
    using System;
    using Models.EntityModels;
    using Response;

    public class SubmitedICOService : ISubmitedICOService
    {
        private readonly IBlackWhaleData data;
        public SubmitedICOService(IBlackWhaleData data)
        {
            this.data = data;
        }
        public IResponse Create(CreateSubmitedICODTO dto)
        {
            var response = new Response();
            if (dto != null)
            {

                var review = new SubmittedICO();

                review.Website = dto.Website;
                review.Submitter = this.data.Users.All().FirstOrDefault(u => u.Email == dto.Submitter);
                review.SubmitDate = DateTime.Now;

                this.data.SubmittedICO.Add(review);
                this.data.SaveChanges();

                response.Status = ResponseStatus.Success;
                response.ResultData = review;

                return response;
            }

            response.Status = ResponseStatus.Fail;
            return response;

        }
    }
}
