namespace BlackWhale.Web.ViewModels.Review
{
    using System.Collections.Generic;
    using System.Web.Mvc;

    public class ReviewIndexPageViewModel
    {
        public int CategoryId { get; set; }

        public List<SelectListItem> Categories { get; set; }

        public int StatusId { get; set; }

        public List<SelectListItem> Statuses { get; set; }
    }
}