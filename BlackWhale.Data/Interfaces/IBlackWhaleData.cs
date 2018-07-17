namespace BlackWhale.Data.Interfaces
{
    using Models.EntityModels;

    public interface IBlackWhaleData
    {
        IRepository<ApplicationUser> Users { get; }

        IRepository<ICOReview> Reviews { get;}

        IRepository<Category> Categories { get; }

        IRepository<Status> Statuses { get; }

        IRepository<GitHubReview> GitHubReviews { get; }
        
        IRepository<Comment> Comments { get; }

        IRepository<SubmittedICO> SubmittedICO { get; }

        int SaveChanges();
    }
}
