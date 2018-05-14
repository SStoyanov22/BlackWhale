namespace BlackWhale.Data.Data
{
    using Interfaces;
    using Models.EntityModels;
    using System;
    using System.Collections.Generic;

    public class BlackWhaleData : IBlackWhaleData
    {
        private IBlackWhaleDbContext context;
        private IDictionary<Type, object> repositories;

        public BlackWhaleData(IBlackWhaleDbContext context)
        {
            this.context = context;
            this.repositories = new Dictionary<Type, object>();
        }

        public IRepository<ApplicationUser> Users{ get { return this.GetRepository<ApplicationUser>(); } }

        public IRepository<Review> Reviews{ get { return this.GetRepository<Review>(); } }

        public IRepository<Status> Statuses{ get { return this.GetRepository<Status>(); } }

        public IRepository<Category> Categories{ get { return this.GetRepository<Category>(); } }

        public IRepository<Verdict> Verdicts { get { return this.GetRepository<Verdict>(); } }

        public IRepository<VerdictSymbol> VerdictSymbols { get { return this.GetRepository<VerdictSymbol>(); } }

        public IRepository<GitHubReview> GitHubReviews{ get { return this.GetRepository<GitHubReview>(); } }

        public int SaveChanges()
        {
            return this.context.SaveChanges();
        }

        private IRepository<T> GetRepository<T>() where T : class
        {
            var typeOfModel = typeof(T);

            if (!this.repositories.ContainsKey(typeOfModel))
            {
                var type = typeof(Repository<T>);
                this.repositories.Add(typeOfModel, Activator.CreateInstance(type, this.context));
            }

            return this.repositories[typeOfModel] as IRepository<T>;
        }
    }
}
