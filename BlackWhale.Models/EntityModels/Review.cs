using System.Collections.Generic;

namespace BlackWhale.Models.EntityModels
{
    public class Review
    {

        public Review()
        {
            this.Symbols = new HashSet<VerdictSymbol>();
        }
        public virtual Category Category { get; set; }

        public virtual Status Status { get; set; }

        public string Description { get; set; }

        public int Views { get; set; }

        public virtual GitHubReview GitHubReview { get; set; }

        public ICollection<VerdictSymbol> Symbols { get; set; }
    }
}
