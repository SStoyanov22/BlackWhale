using System.Collections.Generic;

namespace BlackWhale.Models.EntityModels
{
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    [Table("TokenType")]
    public class TokenType
    {
        [Key]
        [Required]
        public int Id { get; set; }
        // App/Platform     --     Utility         --        Currency              --      Brand Token            -- Security Token
        public string Description { get; set; }

        public virtual ICollection<Review> Reviews { get; set; }
    }
}
