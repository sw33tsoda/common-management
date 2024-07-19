using System.ComponentModel.DataAnnotations;
using System.Diagnostics.CodeAnalysis;
using Server.Enums;
using Server.Models;

namespace Server.Dtos
{
    public class UserAccountDto : RecordBasicDate
    {
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
        public UserRole UserRole { get; set; }
        public Guid? UserProfileId { get; set; }
        public List<UserProfileDto>? UserProfiles { get; }
    }
}