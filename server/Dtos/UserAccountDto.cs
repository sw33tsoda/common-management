using System.ComponentModel.DataAnnotations;

namespace Server.Dtos
{
    public class UserAccountDto : RecordBasicDate
    {
        public Guid Id { get; set; }

        [Required(AllowEmptyStrings = false, ErrorMessage = nameof(Email) + " is required")]
        [EmailAddress(ErrorMessage = "wrong email format")]
        [MinLength(1, ErrorMessage = "minimum 1 character")]
        [MaxLength(320, ErrorMessage = "maximum 320 characters")]
        public string Email { get; set; }

        [Required(AllowEmptyStrings = false, ErrorMessage = nameof(Password) + " is required")]
        [MinLength(1, ErrorMessage = "minimum 1 character")]
        [MaxLength(128, ErrorMessage = "maximum 128 characters")]
        public string Password { get; set; }
        public Guid? UserProfileId { get; set; }
        public List<UserProfileDto>? UserProfiles { get; }
    }
}