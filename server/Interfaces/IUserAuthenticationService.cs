using Server.Models;

namespace Server.Interfaces
{
    public interface IUserAuthenticationService
    {
        public UserAccountDto? GetUserAccount(Guid? userId);
        public bool IsAuthenticated(string? givenPassword, string? storedPassword);
    }
}