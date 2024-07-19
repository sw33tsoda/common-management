using Server.Dtos;

namespace Server.Interfaces
{
    public interface IJwtService
    {
        Task<string> GenerateToken(UserAccountDto? user);
    }
}