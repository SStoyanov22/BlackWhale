using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BlackWhale.Web.ViewModels.Review
{
    public class ReviewPagedViewModel
    {
        public IEnumerable<ReviewIndexViewModel> Reviews { get; set; }

        public int NumberOfPages { get; set; }

        public int CurrentPage { get; set; }
    }
}