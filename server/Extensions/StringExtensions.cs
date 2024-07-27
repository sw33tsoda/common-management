namespace Server.Extensions
{
    public static class StringExtensions
    {
        public static bool IsNullOrEmpty(this string? str)
        {
            if (str == null || str.Equals(Guid.Empty))
            {
                return true;
            }

            return false;
        }
    }
}