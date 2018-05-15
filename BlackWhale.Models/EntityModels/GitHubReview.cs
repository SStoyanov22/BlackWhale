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
            this.Commits = 0;
            this.Contributers = 0;
            this.Branches = 0;
            this.DateOfReview = DateTime.Now;
            this.Issues = 0;
            this.Releases = 0;
            this.Repositories = 0;
            this.Stars = 0;

        }

        [Key]
        [Required]
        public int Id { get; set; }

        public int Commits { get; set; }

        public string IdeaInShort { get; set; }

        public int Repositories { get; set; }

        public int Branches { get; set; }

        public int Releases { get; set; }

        public int Contributers { get; set; }

        public int Issues { get; set; }

        public int Stars { get; set; }

        public string Overall { get; set; }

        public DateTime DateOfReview { get; set; }
    }
}
