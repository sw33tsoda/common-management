using System.ComponentModel.DataAnnotations;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Server.Enums;
using Server.Models;

namespace Server.Entities
{
    public class UserAccountEntity : RecordBasicDate
    {
        public Guid Id { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public UserRole UserRole { get; set; }
        public string UserPermissions { get; set; }
        public virtual List<UserProfileEntity> UserProfiles { get; set; }
    }

    public class UserAccountEntityConfiguration : IEntityTypeConfiguration<UserAccountEntity>
    {
        public void Configure(EntityTypeBuilder<UserAccountEntity> builder)
        {
            builder.ToTable("UserAccounts");
            builder.HasKey(entity => entity.Id);
            builder.HasIndex(entity => entity.Email).IsUnique();
            builder.Property(entity => entity.Email).HasMaxLength(320);
            builder.Property(entity => entity.Password).HasMaxLength(128);
            builder.Property(entity => entity.UserPermissions).HasColumnType("jsonb");
            builder.HasMany(entity => entity.UserProfiles)
                .WithOne(entity => entity.UserAccount)
                .HasForeignKey(entity => entity.UserAccountId);
        }
    }
}
