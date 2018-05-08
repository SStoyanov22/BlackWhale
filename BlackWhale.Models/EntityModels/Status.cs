using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BlackWhale.Models.EntityModels
{
    [Table("Status")]
    public class Status
    {
        [Key]
        [Required]
        public int Id { get; set; }
        //Completed     /      Upcoming ....
        public string Type { get; set; }
    }
}
