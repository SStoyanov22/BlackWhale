namespace BlackWhale.Data.Migrations
{
    using Commons.Constants;
    using Microsoft.AspNet.Identity;
    using Microsoft.AspNet.Identity.EntityFramework;
    using Models.EntityModels;
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<BlackWhaleDbContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = true;
            AutomaticMigrationDataLossAllowed = true;
        }

        protected override void Seed(BlackWhaleDbContext context)
        {
            this.SeedRoles(context);
            this.SeedUsers(context);
            this.SeedCategories(context);
            this.SeedStatuses(context);

        }

        private void SeedStatuses(BlackWhaleDbContext context)
        {
            context.Statuses.Add(new Status() { Description = "Upcoming" });
            context.Statuses.Add(new Status() { Description = "Past" });
            context.Statuses.Add(new Status() { Description = "Network / Communications" });

        }

        private void SeedRoles(BlackWhaleDbContext context)
        {
            if (!context.Roles.Any())
            {
                var userManager = new UserManager<ApplicationUser>(new UserStore<ApplicationUser>(context));
                var roleManager = new RoleManager<IdentityRole>(new RoleStore<IdentityRole>(context));

                var roleAdministrator = roleManager
                    .Create(new IdentityRole(GlobalConstants.ROLE_ADMINISTRATOR));

                var roleUser = roleManager
                    .Create(new IdentityRole(GlobalConstants.ROLE_USER));

                var roleGuest = roleManager
                    .Create(new IdentityRole(GlobalConstants.ROLE_GUEST));
            }
        }

        private void SeedUsers(BlackWhaleDbContext context)
        {
            if (!context.Users.Any())
            {
                var store = new UserStore<ApplicationUser>(context);
                var manager = new UserManager<ApplicationUser>(store);
                var founder = new ApplicationUser()
                {
                    UserName = "admin@admin.com",
                    Email = "admin@admin.com",

                };
                manager.Create(founder, GlobalConstants.ADMINISTRATOR_PASSWORD);
                manager.AddToRole(founder.Id, GlobalConstants.ROLE_ADMINISTRATOR);
            }
        }

        private void SeedCategories(BlackWhaleDbContext context)
        {
            if (!context.Categories.Any())
            {
                context.Categories.Add(new Category() { Title = "Blockchain Platform" });
                context.Categories.Add(new Category() { Title = "Blockchain Platform" });
                context.Categories.Add(new Category() { Title = "Network / Communications" });
                context.Categories.Add(new Category() { Title = "Finance" });
                context.Categories.Add(new Category() { Title = "Payments / Wallets" });
                context.Categories.Add(new Category() { Title = "Drugs / Health" });
                context.Categories.Add(new Category() { Title = "Social Network" });
                context.Categories.Add(new Category() { Title = "Commerce / Retail" });
                context.Categories.Add(new Category() { Title = "Content / Advertising" });
                context.Categories.Add(new Category() { Title = "Energy / Utilities" });
                context.Categories.Add(new Category() { Title = "Gaming / AR / VR" });
                context.Categories.Add(new Category() { Title = "Data / Computing / AI" });
                context.Categories.Add(new Category() { Title = "Asset Management" });
                context.Categories.Add(new Category() { Title = "Security / Identity" });
                context.Categories.Add(new Category() { Title = "Funding / VC" });
                context.Categories.Add(new Category() { Title = "Prediction Market" });
                context.Categories.Add(new Category() { Title = "IoT" });
                context.Categories.Add(new Category() { Title = "Jobs / Marketplace" });
                context.Categories.Add(new Category() { Title = "Entertainment" });
                context.Categories.Add(new Category() { Title = "Betting / Gambling" });
                context.Categories.Add(new Category() { Title = "Real Estate" });
                context.Categories.Add(new Category() { Title = "Education" });
                context.Categories.Add(new Category() { Title = "Insurance" });
                context.Categories.Add(new Category() { Title = "Music / Arts" });

                context.SaveChanges();
            }
        }
    }
}
