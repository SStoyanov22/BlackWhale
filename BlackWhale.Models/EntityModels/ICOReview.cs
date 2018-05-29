namespace BlackWhale.Models.EntityModels
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    [Table("ICOReview")]
    public class ICOReview
    {
        [Key]
        [Required]
        public int Id { get; set; }

        public ICOReview()
        {
            this.Views = 0;
            this.IsHidden = true;

        }
        public virtual Category Category { get; set; }

        public virtual Status Status { get; set; }

        public string Article { get; set; }

        public int Views { get; set; }

        //public virtual GitHubReview GitHubReview { get; set; }

        public bool IsHidden { get; set; }

        public virtual ApplicationUser Reviewer { get; set; }

        public virtual ICollection<Comment> Comments { get; set; }
    }
}
