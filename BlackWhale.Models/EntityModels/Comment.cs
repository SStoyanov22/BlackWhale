namespace BlackWhale.Models.EntityModels
{
    using System;
    using System.ComponentModel.DataAnnotations;

    public class Comment
    {
        public Comment()
        {
            this.CreatedOn = DateTime.Now;
        }

        [Key]
        [Required]
        public int Id { get; set; }

        [Required]
        [MinLength(1)]
        [MaxLength(280)]
        public string Text { get; set; }

        [Required]
        public virtual ApplicationUser Author { get; set; }

        [Required]
        public virtual ICOReview Review { get; set; }

        [Required]
        public DateTime CreatedOn  { get; set; }

        public DateTime ModifiedOn { get; set; }
    }

}
