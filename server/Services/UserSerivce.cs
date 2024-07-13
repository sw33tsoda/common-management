using Microsoft.IdentityModel.Tokens;
using Server.Entities;
using Server.Interfaces;
using Server.Models;
using Server.Extensions;

namespace Server.Services
{
    public class UserService : IUserService
    {
        private readonly IRepositoryService _repository;

        public UserService(IRepositoryService repository)
        {
            _repository = repository;
        }

        public UserAccountDto? GetUserAccountByUserId(Guid? givenUserId)
        {
            if (givenUserId.IsNullOrEmpty())
            {
                throw new ArgumentNullException(nameof(givenUserId), "cannot be null or empty");
            }

            var entity = _repository.Find<UserAccountEntity>(entity => entity.Id == givenUserId);

            if (entity == null)
            {
                return null;
            }

            return ConvertUserAccountEntityToDto(entity);
        }

        public UserAccountDto? GetUserAccountByEmail(string givenEmail)
        {
            if (givenEmail.IsNullOrEmpty())
            {
                throw new ArgumentNullException(nameof(givenEmail), "cannot be null or empty");
            }

            var entity = _repository.Find<UserAccountEntity>(entity => entity.Email == givenEmail);

            if (entity == null)
            {
                return null;
            }

            return ConvertUserAccountEntityToDto(entity);
        }

        public UserAccountDto ConvertUserAccountEntityToDto(UserAccountEntity entity) => new()
        {
            Id = entity.Id,
            Email = entity.Email,
            Password = entity.Password
        };
    }
}