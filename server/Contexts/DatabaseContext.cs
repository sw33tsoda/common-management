using Microsoft.EntityFrameworkCore;
using Server.Entities;

namespace Server.Contexts
{
    public class DatabaseContext : DbContext
    {
        public DatabaseContext(DbContextOptions<DatabaseContext> options) : base(options)
        {
            ChangeTracker.QueryTrackingBehavior = QueryTrackingBehavior.NoTracking;
        }

        public DbSet<UserAccountEntity> UserAccounts { get; set; }
        public DbSet<UserProfileEntity> UserProfiles { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<UserAccountEntity>().HasMany(entity => entity.UserProfiles).WithOne(entity => entity.UserAccount).HasForeignKey(entity => entity.UserAccountId);
            base.OnModelCreating(modelBuilder);
        }
    }
}