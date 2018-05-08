using System.ComponentModel.DataAnnotations;

namespace BlackWhale.Models.EntityModels
{
    public class Category
    {
        [Key]
        [Required]
        public int Id { get; set; }
        public string Title { get; set; }
    }
}
