using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BlackWhale.Models.EntityModels
{
    [Table("SubmittedICO")]
    public class SubmittedICO
    {
        [Key]
        [Required]
        public int Id { get; set; }

        public SubmittedICO()
        {
            this.SubmitDate = DateTime.Now;
        }

        public string Website { get; set; }

        public virtual ApplicationUser Submitter { get; set; }

        public DateTime SubmitDate { get; set; }
    }
}
