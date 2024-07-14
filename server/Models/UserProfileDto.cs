namespace Server.Models
{
    public class UserProfile : RecordBasicDate
    {
        public Guid Id { get; set; }
        public string DisplayName { get; set; }
    }
}