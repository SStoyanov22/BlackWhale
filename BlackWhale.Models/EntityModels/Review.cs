namespace BlackWhale.Models.EntityModels
{
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    [Table("Review")]
    public class Review
    {
        [Key]
        [Required]
        public int Id { get; set; }

        public Review()
        {
            this.UserVerdicts = new HashSet<Verdict>();
            this.Views = 0;
            this.IsHidden = true;

        }
        public virtual Category Category { get; set; }

        public virtual Status Status { get; set; }

        public virtual TokenType Type { get; set; }

        public virtual TokenSymbol ShortName { get; set; }

        public string Description { get; set; }

        public int Views { get; set; }

        public virtual GitHubReview GitHubReview { get; set; }

        public virtual ICollection<Verdict> UserVerdicts { get; set; }

        public virtual  Verdict BlackWhaleVerdict { get; set; }

        public bool IsHidden { get; set; }
    }
}
