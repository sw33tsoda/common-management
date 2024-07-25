using Server.Entities;
using Server.Interfaces;
using Server.Dtos;
using Server.Exceptions;

namespace Server.Services
{
    public class UserService : IUserService
    {
        private readonly IRepositoryService _repository;

        public UserService(IRepositoryService repository)
        {
            _repository = repository;
        }

        public async Task<UserAccountDto> GetUserAccountByUserId(Guid givenUserId)
        {
            var entity = await _repository.FindAsync<UserAccountEntity>(entity => entity.Id == givenUserId);

            if (entity == null)
            {
                throw new ResourceNotFoundException("User account does not exist");
            }

            return new UserAccountDto
            {
                Id = entity.Id,
                Email = entity.Email,
                Password = entity.Password
            };
        }

        public async Task<UserAccountDto> GetUserAccountByEmail(string givenEmail)
        {
            var entity = await _repository.FindAsync<UserAccountEntity>(entity => entity.Email == givenEmail);

            if (entity == null)
            {
                throw new ResourceNotFoundException("User account does not exist");
            }

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