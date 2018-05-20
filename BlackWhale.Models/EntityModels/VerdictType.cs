using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BlackWhale.Models.EntityModels
{
    [Table("VerdictType")]
    public class VerdictType    
    {
        [Key]
        [Required]
        public int Id { get; set; }

        [Required]
        public string Title { get; set; }

        public int Count { get; set; }

        public virtual ICollection<Verdict> Verdicts  { get; set; }
    }
}
