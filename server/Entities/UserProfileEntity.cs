using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Server.Dtos;

namespace Server.Entities
{
    public class UserProfileEntity : RecordBasicDate
    {
        [Key]
        public Guid Id { get; set; }

        [Required(AllowEmptyStrings = false, ErrorMessage = nameof(DisplayName) + " is required")]
        [MinLength(1, ErrorMessage = "minimum 1 character")]
        [MaxLength(32, ErrorMessage = "maximum 32 characters")]
        public string DisplayName { get; set; }

        public Guid UserAccountId { get; set; }

        [ForeignKey("UserAccountId")]
        public virtual UserAccountEntity UserAccount { get; set; }
    }
}
