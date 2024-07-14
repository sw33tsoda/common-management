using Server.Entities;
using Server.Models;

namespace Server.Interfaces
{
    public interface IUserService
    {
        Task<UserAccountDto?> GetUserAccountByUserId(Guid? givenUserId);
        Task<UserAccountDto?> GetUserAccountByEmail(string givenEmail);
        UserAccountDto ConvertUserAccountEntityToDto(UserAccountEntity entity);
        UserAccountEntity ConvertUserAccountDtoToEntity(UserAccountDto dto);
        Task CreateUserAccount(UserAccountDto userAccountDto);
    }
}