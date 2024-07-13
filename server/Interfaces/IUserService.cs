using Server.Entities;
using Server.Models;

namespace Server.Interfaces
{
    public interface IUserService
    {
        public UserAccountDto? GetUserAccountByUserId(Guid? givenUserId);
        public UserAccountDto? GetUserAccountByEmail(string givenEmail);
        public UserAccountDto ConvertUserAccountEntityToDto(UserAccountEntity entity);
    }
}