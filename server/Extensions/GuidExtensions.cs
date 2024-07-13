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
            if (Guid.TryParse(id, out _))
            {
                return true;
            }

            return false;
        }
    }
}