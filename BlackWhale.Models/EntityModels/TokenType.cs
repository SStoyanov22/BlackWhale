namespace BlackWhale.Models.EntityModels
{
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Collections.Generic;

    [Table("TokenType")]
    public class TokenType
    {
        [Key]
        [Required]
        public int Id { get; set; }

        public string Description { get; set; }

        public virtual ICollection<ICOReview> Reviews { get; set; }
    }
}
