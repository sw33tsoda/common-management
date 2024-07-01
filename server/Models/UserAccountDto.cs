namespace Server.Models
{
    public class UserAccountDto : RecordBasicDate
    {
        public Guid Id { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public Guid? UserProfileId { get; set; }
        public List<UserProfile> UserProfiles { get; }
    }
}