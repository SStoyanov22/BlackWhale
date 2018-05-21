using System;

namespace BlackWhale.Models.EntityModels
{
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

        public virtual ApplicationUser Reviewer { get; set; }

        public bool IsReviewFinished { get; set; }

        public string Site { get; set; }

        public DateTime IdeaOriginated { get; set; }

        public string   AlphaBetaProduct { get; set; }

        public DateTime WhitelistStart { get; set; }

        public DateTime WhitelistEnd { get; set; }

        public DateTime PresaleDate { get; set; }

        public DateTime CrowdsaleDate { get; set; }

        public DateTime AccessToTokens { get; set; }

        public virtual ICollection<Exchange> Exchanges { get; set; }

        public decimal TotalMarketCap { get; set; }

        public decimal HardCapFixed { get; set; }

        public virtual Currency HardCapFixedCurrency { get; set; }

        public decimal ICOHardCapUSD { get; set; }

        public decimal ICOHardCapETH { get; set; }

        public decimal ICOSoftCap { get; set; }

        public virtual Currency ICOSoftCapCurrency { get; set; }

        public decimal IndividualCap { get; set; }

        public virtual Currency IndividualCapCurrency { get; set; }

        public decimal PricePerTokenETH { get; set; }

        public decimal PricePerTokenUSD { get; set; }

        public int TotalTokens { get; set; }

        public int TokensInCirculation { get; set; }

        public string WhitelistAndSalesProcess { get; set; }

        public string Bonuses { get; set; }

        public string Idea { get; set; }

        public string Team { get; set; }

        public string PartnersAndAdvisors { get; set; }

        public string HypeAndPublicity { get; set; }

        public string RoadMap { get; set; }

        public string ExecutionOnPastProjects { get; set; }

        public string Investors { get; set; }

        public string Other { get; set; }





    }
}
