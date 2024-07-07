namespace Server.Models
{
    public class UserAccountDto : RecordBasicDate
    {
        public Guid Id { get; set; }
        public required string Email { get; set; }
        public required string Password { get; set; }
        public Guid? UserProfileId { get; set; }
        public List<UserProfile>? UserProfiles { get; }
    }
}