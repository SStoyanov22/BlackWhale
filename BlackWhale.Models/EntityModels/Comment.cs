namespace BlackWhale.Models.EntityModels
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    public class Comment
    {
        public Comment()
        {
            this.CreatedOn = DateTime.Now;
        }

        [Key]
        public int Id { get; set; }

        [Required]
        [MinLength(1)]
        [MaxLength(280)]
        public string Content { get; set; }

        [Required]
        public virtual ApplicationUser Author { get; set; }

        [Required]
        public virtual ICOReview Review { get; set; }

        [Required]
        public DateTime CreatedOn  { get; set; }

        public bool IsModified { get; set; }

    }

}
