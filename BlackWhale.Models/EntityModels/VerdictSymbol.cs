using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BlackWhale.Models.EntityModels
{
    [Table("VerdictSymbol")]
    public class VerdictSymbol
    {
        [Key]
        [Required]
        public int Id { get; set; }

        public int Count { get; set; }
    }
}
