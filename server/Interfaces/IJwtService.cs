using Server.Dtos;

namespace Server.Interfaces
{
    public interface IJwtService
    {
        string GenerateToken(UserAccountDto? user);
    }
}