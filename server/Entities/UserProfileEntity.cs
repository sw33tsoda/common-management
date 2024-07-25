using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Server.Models;

namespace Server.Entities
{
    public class UserProfileEntity : RecordBasicDate
    {
        public Guid Id { get; set; }
        public string DisplayName { get; set; }
        public Guid UserAccountId { get; set; }
        public virtual UserAccountEntity UserAccount { get; set; }
        public bool IsProfileInUse { get; set; }
    }

    public class UserProfileEntityConfiguration : IEntityTypeConfiguration<UserProfileEntity>
    {
        public void Configure(EntityTypeBuilder<UserProfileEntity> builder)
        {
            builder.ToTable("UserProfiles");
            builder.HasKey(entity => entity.Id);
            builder.Property(entity => entity.DisplayName)
                .HasMaxLength(32)
                .IsRequired(false);
            builder.Property(entity => entity.IsProfileInUse).HasDefaultValue(false);
            builder.HasOne(entity => entity.UserAccount)
                .WithMany(entity => entity.UserProfiles)
                .HasForeignKey(entity => entity.UserAccountId);
        }
    }
}
