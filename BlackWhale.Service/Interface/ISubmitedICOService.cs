namespace BlackWhale.Service.Interface
{
    using BlackWhale.Core.DTO.SubmitedICO;
    using BlackWhale.Service.Response;
    using System.Collections.Generic;

    interface ISubmitedICOService
    {
        IResponse Create(CreateSubmitedICODTO dto);

        //IEnumerable<SubmittedICODTO> GetAll(FilterReviewDTO sort);
    }
}
