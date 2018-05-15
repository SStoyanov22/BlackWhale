namespace BlackWhale.Models.EntityModels
{
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    [Table("Verdict")]
    public class Verdict
    {
        public Verdict()
        {
            this.Count = 0;
        }

        [Key]
        [Required]
        public int Id { get; set; }

        public string Category { get; set; }

        public string Description { get; set; }

        public int Count { get; set; }

    }
}
