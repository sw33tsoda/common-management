using Server.Entities;
using Server.Dtos;

namespace Server.Interfaces
{
    public interface IUserService
    {
        Task<UserAccountDto?> GetUserAccountByUserId(Guid? givenUserId);
        Task<UserAccountDto?> GetUserAccountByEmail(string givenEmail);
        Task<UserAccountDto> CreateUserAccount(UserAccountDto userAccountDto);
    }
}