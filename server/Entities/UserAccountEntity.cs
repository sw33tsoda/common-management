using System.ComponentModel.DataAnnotations;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Server.Dtos;

namespace Server.Entities
{
    public class UserAccountEntity : RecordBasicDate
    {
        [Key]
        public Guid Id { get; set; }

        [Required(AllowEmptyStrings = false, ErrorMessage = "this field is required")]
        [EmailAddress(ErrorMessage = "wrong email format")]
        [MinLength(1, ErrorMessage = "minimum 1 character")]
        [MaxLength(320, ErrorMessage = "maximum 320 characters")]
        public string Email { get; set; }

        [Required(AllowEmptyStrings = false, ErrorMessage = "this field is required")]
        [MinLength(1, ErrorMessage = "minimum 1 character")]
        [MaxLength(128, ErrorMessage = "maximum 128 characters")]
        public string Password { get; set; }
        public virtual List<UserProfileEntity> UserProfiles { get; set; }
    }

    public class UserAccountEntityConfiguration : IEntityTypeConfiguration<UserAccountEntity>
    {
        public void Configure(EntityTypeBuilder<UserAccountEntity> builder)
        {
            builder.ToTable("UserAccount");
            builder.HasIndex(entity => entity.Email).IsUnique();
            builder.HasMany(entity => entity.UserProfiles).WithOne(entity => entity.UserAccount).HasForeignKey(entity => entity.UserAccountId);
        }
    }
}
