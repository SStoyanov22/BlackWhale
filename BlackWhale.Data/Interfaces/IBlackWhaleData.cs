namespace BlackWhale.Data.Interfaces
{
    using Models.EntityModels;

    public interface IBlackWhaleData
    {
        IRepository<ApplicationUser> Users { get; }

        IRepository<Review> Reviews { get;}

        IRepository<Category> Categories { get; }

        IRepository<Status> Statuses { get; }

        IRepository<VerdictType> VerdictTypes { get;}

        IRepository<Verdict> Verdicts { get; }

        IRepository<GitHubReview> GitHubReviews { get; }

        int SaveChanges();
    }
}
