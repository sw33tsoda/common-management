namespace Server.Models
{
    public class RecordBasicInformation
    {
        DateTime CreatedAt { set; get; }
        Guid CreatedBy { set; get; }
        DateTime ModifiedAt { set; get; }
        Guid ModifiedBy { set; get; }
    }
}