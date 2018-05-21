namespace BlackWhale.Data
{
    using Models.EntityModels;
    using Microsoft.AspNet.Identity.EntityFramework;
    using Interfaces;
    using System.Data.Entity;
    using Migrations;
    using System;

    public class BlackWhaleDbContext : IdentityDbContext, IBlackWhaleDbContext
    {
        public BlackWhaleDbContext()
            : base("name=BlackWhale")
        {
            var migration = new MigrateDatabaseToLatestVersion<BlackWhaleDbContext, Configuration>();
            Database.SetInitializer(migration);
        }

        public IDbSet<ApplicationUser> User { get; set; }

        public IDbSet<ICOReview> Reviews { get; set; }

        public IDbSet<Category> Categories { get; set; }

        public IDbSet<Status> Statuses { get; set; }

        public IDbSet<VerdictType> VerdictTypes { get; set; }

        public IDbSet<Verdict> Vrdicts { get; set; }

        public IDbSet<GitHubReview> GitHubReviews { get; set; }

        public IDbSet<Exchange> Exchanges { get; set; }

        public new IDbSet<TEntity> Set<TEntity>() where TEntity : class
        {
            return base.Set<TEntity>();
        }

        public static BlackWhaleDbContext Create()
        {
            return new BlackWhaleDbContext();
        }

    }
}