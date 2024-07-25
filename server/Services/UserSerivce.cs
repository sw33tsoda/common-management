using Microsoft.IdentityModel.Tokens;
using Server.Entities;
using Server.Interfaces;
using Server.Dtos;
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

        public async Task<UserAccountDto> GetUserAccountByUserId(Guid? givenUserId)
        {
            if (givenUserId.IsNullOrEmpty())
            {
                throw new ArgumentNullException(nameof(givenUserId), "cannot be null or empty");
            }

            var entity = await _repository.FindAsync<UserAccountEntity>(entity => entity.Id == givenUserId);

            ArgumentNullException.ThrowIfNull(entity);

            return new UserAccountDto
            {
                Id = entity.Id,
                Email = entity.Email,
                Password = entity.Password
            };
        }

        public async Task<UserAccountDto> GetUserAccountByEmail(string givenEmail)
        {
            if (givenEmail.IsNullOrEmpty())
            {
                throw new ArgumentNullException(nameof(givenEmail), "cannot be null or empty");
            }

            var entity = await _repository.FindAsync<UserAccountEntity>(entity => entity.Email == givenEmail);

            ArgumentNullException.ThrowIfNull(entity);

            return new UserAccountDto
            {
                Id = entity.Id,
                Email = entity.Email,
                Password = entity.Password
            };
        }

        public async Task<UserAccountEntity> AddUserAccount(UserAccountEntity userAccountEntity)
        {
            return await _repository.AddAsync(userAccountEntity);
        }

        public async Task<UserProfileEntity> AddUserProfile(UserProfileEntity userProfileEntity)
        {
            return await _repository.AddAsync(userProfileEntity);
        }
    }
}