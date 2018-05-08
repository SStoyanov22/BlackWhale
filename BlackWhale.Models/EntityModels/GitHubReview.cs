using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BlackWhale.Models.EntityModels
{
    public class GitHubReview
    {
        [Key]
        [Required]
        public int Id { get; set; }
    }
}
