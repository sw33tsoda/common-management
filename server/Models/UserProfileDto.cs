namespace Server.Models
{
    public class UserProfile : RecordBasicDate
    {
        public Guid Id { get; set; }
        public required string DisplayName { get; set; }
    }
}