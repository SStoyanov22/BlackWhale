namespace BlackWhale.Models.EntityModels
{
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Collections.Generic;

    [Table("Category")]
    public class Category
    {
        public Category()
        {
            this.Reviews = new HashSet<ICOReview>();
        }
        [Key]
        public int Id { get; set; }

        [Required]
        public string Title { get; set; }

        public virtual ICollection<ICOReview> Reviews { get; set; }

    }
}
