using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Server.Models;

namespace Server.Entities
{
    public class UserAccountEntity : RecordBasicInformation
    {
        [Key]
        public Guid Id { get; set; }

        [Required(AllowEmptyStrings = false, ErrorMessage = nameof(Email) + " is required")]
        [EmailAddress(ErrorMessage = "wrong email format")]
        [MinLength(1, ErrorMessage = "minimum 1 character")]
        [MaxLength(320, ErrorMessage = "maximum 320 characters")]
        public required string Email { get; set; }

        [Required(AllowEmptyStrings = false, ErrorMessage = nameof(Password) + " is required")]
        [MinLength(1, ErrorMessage = "minimum 1 character")]
        [MaxLength(128, ErrorMessage = "maximum 128 characters")]
        public required string Password { get; set; }

        public Guid? UserProfileId { get; set; }

        [ForeignKey("UserProfileId")]
        public virtual UserProfileEntity? UserProfile { get; }
    }
}
