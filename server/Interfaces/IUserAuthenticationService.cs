using Server.Models;

namespace Server.Interfaces
{
    public interface IUserAuthenticationService
    {
        bool CheckPasswordMatch(string? givenPassword, string? storedPassword);
        Task<bool> CheckAuthenticationLegit(UserAccountDto userAccountDto);
        Task<string?> Authenticate(UserAccountDto userAccountDto);
        Task Register(UserAccountDto userAccountDto);
    }
}