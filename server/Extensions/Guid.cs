namespace Server.Extensions
{
    public static class GuidExtensions
    {
        public static bool IsNullOrEmpty(this Guid? id)
        {
            if (id.Equals(Guid.Empty) || id == null)
            {
                return true;
            }
            return false;
        }

        public static bool IsGuidValid(this string id)
        {
            return Guid.TryParse(id, out _);
        }
    }
}