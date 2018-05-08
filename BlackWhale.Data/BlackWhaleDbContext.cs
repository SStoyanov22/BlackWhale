namespace BlackWhale.Data
{
    using Models.EntityModels;
    using Microsoft.AspNet.Identity.EntityFramework;
    public class BlackWhaleDbContext : IdentityDbContext<ApplicationUser>
    {
        public BlackWhaleDbContext()
            : base("BlackWhale",throwIfV1Schema: false)
        {
        }

        public static BlackWhaleDbContext Create()
        {
            return new BlackWhaleDbContext();
        }

        // Add a DbSet for each entity type that you want to include in your model. For more information 
        // on configuring and using a Code First model, see http://go.microsoft.com/fwlink/?LinkId=390109.

        // public virtual DbSet<MyEntity> MyEntities { get; set; }
    }
}