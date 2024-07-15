using System.ComponentModel.DataAnnotations;

namespace Server.Dtos
{
    public class UserProfileDto : RecordBasicDate
    {
        public Guid Id { get; set; }

        [Required(AllowEmptyStrings = false, ErrorMessage = "this field is required")]
        [MinLength(1, ErrorMessage = "minimum 1 character")]
        [MaxLength(32, ErrorMessage = "maximum 32 characters")]
        public string DisplayName { get; set; }
    }
}