using System.ComponentModel.DataAnnotations;

namespace Server.Dtos
{
    public class RegisterParamsDto
    {
        [Required(AllowEmptyStrings = false, ErrorMessage = "this field is required")]
        [EmailAddress(ErrorMessage = "wrong email format")]
        [MinLength(1, ErrorMessage = "minimum 1 character")]
        [MaxLength(320, ErrorMessage = "maximum 320 characters")]
        public string Email { get; set; }

        [Required(AllowEmptyStrings = false, ErrorMessage = "this field is required")]
        [MinLength(1, ErrorMessage = "minimum 1 character")]
        [MaxLength(128, ErrorMessage = "maximum 128 characters")]
        public string Password { get; set; }
    }
}