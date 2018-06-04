namespace BlackWhale.Models.EntityModels
{
    using System;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    [Table("GitHubReview")]
    public class GitHubReview
    {
        
        public GitHubReview()
        {
            this.LastUpdated = DateTime.Now;
            this.IsHidden = true;

        }

        [Key]
        [Required]
        public int Id { get; set; }

        public string Article { get; set; }

        public bool IsHidden { get; set; }

        [Required]
        public DateTime LastUpdated { get; set; }

    }
}
