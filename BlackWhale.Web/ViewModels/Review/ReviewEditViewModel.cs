namespace BlackWhale.Web.ViewModels.Review
{
    using Commons.Mapper;
    using Core.DTO.Review;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.ComponentModel.DataAnnotations;
    using System.Web;
    using System.Web.Mvc;

    public class ReviewEditViewModel : IMapFrom<DetailsReviewDTO> , IMapTo<EditReviewDTO>
    {
        public int Id { get; set; }
        [Required]
        public string Description { get; set; }

        [AllowHtml]
        public string Article { get; set; }

        public string Title { get; set; }

        [DisplayName("Current File Name")]
        public string ImageUrl { get; set; }

        public HttpPostedFileBase Image { get; set; }

        public int CategoryId { get; set; }

        public List<SelectListItem> Categories { get; set; }

        public int StatusId { get; set; }

        public List<SelectListItem> Statuses { get; set; }


    }
}