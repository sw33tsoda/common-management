using System.ComponentModel.DataAnnotations;
using System.Diagnostics.CodeAnalysis;
using Server.Enums;
using Server.Models;

namespace Server.Dtos
{
    public class UserAccountDto : RecordBasicDate
    {
        public Guid Id { get; set; }

        [Required(AllowEmptyStrings = false, ErrorMessage = "This field is required")]
        [EmailAddress(ErrorMessage = "Wrong email format")]
        [MinLength(1, ErrorMessage = "Minimum 1 character")]
        [MaxLength(320, ErrorMessage = "Maximum 320 characters")]
        public string Email { get; set; }

        [Required(AllowEmptyStrings = false, ErrorMessage = "This field is required")]
        [MinLength(1, ErrorMessage = "Minimum 1 character")]
        [MaxLength(128, ErrorMessage = "Maximum 128 characters")]
        public string Password { get; set; }
        public UserRole UserRole { get; set; }
        public List<UserProfileDto>? UserProfiles { get; set; }
    }
}