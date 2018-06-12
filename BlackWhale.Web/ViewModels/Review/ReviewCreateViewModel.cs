﻿namespace BlackWhale.Web.ViewModels.Review
{
    using Commons.Mapper;
    using Core.DTO.Review;
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.Web.Mvc;

    public class ReviewCreateViewModel : IMapTo<CreateReviewDTO>
    {
        [Required]
        [AllowHtml]

        public string Description { get; set; }

        public string Article { get; set; }

        public string Title { get; set; }

        public int Category { get; set; }

        public List<SelectListItem> Categories { get; set; }

        public string Status { get; set; }

        public int CountDolphins { get; set; }

        public int CountWhales { get; set; }

        public int CountShrimps { get; set; }

        public int CountPass { get; set; }

        public int Views { get; set; }

        public bool IsHidden { get; set; }

        public string Reviewer { get; set; }

        public DateTime LastUpdated { get; set; }

    }
}