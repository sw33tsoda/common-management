using System.ComponentModel.DataAnnotations;
using Server.Models;

namespace Server.Dtos
{
    public class UserProfileDto : RecordBasicDate
    {
        public Guid Id { get; set; }

        [Required(AllowEmptyStrings = false, ErrorMessage = "this field is required")]
        [MinLength(1, ErrorMessage = "minimum 1 character")]
        [MaxLength(32, ErrorMessage = "maximum 32 characters")]
        public string? DisplayName { get; set; }

        public Guid UserAccountId { get; set; }

        public bool IsProfileInUse { get; set; }
    }
}