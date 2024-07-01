using System.ComponentModel.DataAnnotations;
using Server.Models;

namespace Server.Entities
{
    public class UserProfileEntity : RecordBasicDate
    {
        [Key]
        public Guid Id { get; set; }

        [Required(AllowEmptyStrings = false, ErrorMessage = nameof(DisplayName) + " is required")]
        [MinLength(1, ErrorMessage = "minimum 1 character")]
        [MaxLength(32, ErrorMessage = "maximum 32 characters")]
        public required string DisplayName { get; set; }
    }
}
