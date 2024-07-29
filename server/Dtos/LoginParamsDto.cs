using System.ComponentModel.DataAnnotations;

namespace Server.Dtos
{
    public class LoginParamsDto
    {
        [Required(AllowEmptyStrings = false, ErrorMessage = "This field is required")]
        [EmailAddress(ErrorMessage = "Mrong email format")]
        [MinLength(1, ErrorMessage = "Minimum 1 character")]
        [MaxLength(320, ErrorMessage = "Maximum 320 characters")]
        public string Email { get; set; }

        [Required(AllowEmptyStrings = false, ErrorMessage = "This field is required")]
        [MinLength(1, ErrorMessage = "Minimum 1 character")]
        [MaxLength(128, ErrorMessage = "Maximum 128 characters")]
        public string Password { get; set; }
    }
}