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
    }
}
