namespace BlackWhale.Models.EntityModels
{
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    [Table("Category")]
    public class Category
    {
        [Key]
        [Required]
        public int Id { get; set; }
        public string Title { get; set; }
    }
}
