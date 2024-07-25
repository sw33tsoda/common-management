using Server.Dtos;

namespace Server.Interfaces
{
    public interface IUserAuthenticationService
    {
        bool CheckPasswordMatch(string? givenPassword, string? storedPassword);
        Task<bool> CheckAuthenticationLegit(LoginParamsDto loginParamsDto);
        Task<LoginResponseDto> Authenticate(LoginParamsDto loginParamsDto);
        Task<RegisterResponseDto> Register(RegisterParamsDto registerParamsDto);
    }
}