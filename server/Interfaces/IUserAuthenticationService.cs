using Server.Models;

namespace Server.Interfaces
{
    public interface IUserAuthenticationService
    {
        public bool CheckPasswordMatch(string givenPassword, string? storedPassword);
        public bool CheckAuthenticationLegit(UserAccountDto userAccountDto);
        public string? Authenticate(UserAccountDto userAccountDto);
    }
}