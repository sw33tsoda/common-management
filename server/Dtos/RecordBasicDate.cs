namespace Server.Dtos
{
    public class RecordBasicDate
    {
        public DateTime CreatedAt { set; get; }
        public Guid CreatedBy { set; get; }
        public DateTime ModifiedAt { set; get; }
        public Guid ModifiedBy { set; get; }
    }
}