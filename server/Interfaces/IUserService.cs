using Server.Entities;
using Server.Dtos;

namespace Server.Interfaces
{
    public interface IUserService
    {
        Task<UserAccountDto> GetUserAccountByUserId(Guid? givenUserId);
        Task<UserAccountDto> GetUserAccountByEmail(string givenEmail);
        Task<UserAccountEntity> AddUserAccount(UserAccountEntity userAccountEntity);
        Task<UserProfileEntity> AddUserProfile(UserProfileEntity userProfileEntity);
    }
}