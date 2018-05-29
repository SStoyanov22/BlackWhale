namespace BlackWhale.Data.Interfaces
{
    using Models.EntityModels;
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;

    public interface IBlackWhaleDbContext
    {
        IDbSet<ApplicationUser> User { get; set; }

        IDbSet<ICOReview> Reviews { get; set; }

        IDbSet<Category> Categories { get; set; }

        IDbSet<Status> Statuses { get; set; }

        IDbSet<GitHubReview> GitHubReviews { get; set; }

        IDbSet<Comment> Comments { get; set; }

        IDbSet<TEntity> Set<TEntity>() where TEntity : class;

        DbEntityEntry<TEntity> Entry<TEntity>(TEntity entity) where TEntity : class;

        int SaveChanges();


    }
}
