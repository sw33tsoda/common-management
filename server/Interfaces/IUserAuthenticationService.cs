using Server.Dtos;

namespace Server.Interfaces
{
    public interface IUserAuthenticationService
    {
        bool CheckPasswordMatch(string? givenPassword, string? storedPassword);
        Task<bool> CheckAuthenticationLegit(UserAccountDto userAccountDto);
        Task<string?> Authenticate(UserAccountDto userAccountDto);
        Task<UserAccountDto> Register(UserAccountDto userAccountDto);
    }
}