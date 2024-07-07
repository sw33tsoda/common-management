using Server.Models;

namespace Server.Interfaces
{
    public interface IJwtService
    {
        string GenerateToken(UserAccountDto? user);
    }
}