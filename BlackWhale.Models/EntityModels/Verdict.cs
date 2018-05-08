using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BlackWhale.Models.EntityModels
{
    [Table("Verdict")]
    public class Verdict
    {
        [Key]
        [Required]
        public int Id { get; set; }
        public  string Category { get; set; }

        public string Description { get; set; }

        public int Count { get; set; }

        public VerdictSymbol Symbol { get; set; }
    }
}
