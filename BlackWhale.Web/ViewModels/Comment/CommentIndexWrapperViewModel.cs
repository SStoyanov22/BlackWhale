using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BlackWhale.Web.ViewModels.Comment
{
    public class CommentIndexWrapperViewModel
    {
        public int ReviewId { get; set; }

        public IEnumerable<CommentIndexViewModel> Comments { get; set; }
    }
}