using Server.Entities;
using Server.Dtos;
using Server.Models;

namespace Server.Interfaces
{
    public interface IUserService
    {
        Task<UserAccountDto> GetUserAccountByUserId(Guid givenUserId);
        Task<UserAccountDto> GetUserAccountByEmail(string givenEmail);
        ResourcePermission GetUserBasicPermissionsForNewMember();
        Task<UserAccountEntity> AddUserAccount(UserAccountEntity userAccountEntity);
        Task<UserProfileEntity> AddUserProfile(UserProfileEntity userProfileEntity);
    }
}