using Microsoft.IdentityModel.Tokens;
using Server.Entities;
using Server.Interfaces;
using Server.Dtos;
using Server.Extensions;
using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Http.HttpResults;

namespace Server.Services
{
    public class UserService : IUserService
    {
        private readonly IRepositoryService _repository;

        public UserService(IRepositoryService repository)
        {
            _repository = repository;
        }

        public async Task<UserAccountDto?> GetUserAccountByUserId(Guid? givenUserId)
        {
            if (givenUserId.IsNullOrEmpty())
            {
                throw new ArgumentNullException(nameof(givenUserId), "cannot be null or empty");
            }

            var entity = await _repository.FindAsync<UserAccountEntity>(entity => entity.Id == givenUserId);

            if (entity == null)
            {
                return null;
            }

            return new UserAccountDto
            {
                Id = entity.Id,
                Email = entity.Email,
                Password = entity.Password
            };
        }

        public async Task<UserAccountDto?> GetUserAccountByEmail(string givenEmail)
        {
            if (givenEmail.IsNullOrEmpty())
            {
                throw new ArgumentNullException(nameof(givenEmail), "cannot be null or empty");
            }

            var entity = await _repository.FindAsync<UserAccountEntity>(entity => entity.Email == givenEmail);

            if (entity == null)
            {
                return null;
            }

            return new UserAccountDto
            {
                Id = entity.Id,
                Email = entity.Email,
                Password = entity.Password
            };
        }

        public async Task<UserAccountDto> CreateUserAccount(UserAccountDto userAccountDto)
        {
            var addedEntity = await _repository.AddAsync(new UserAccountEntity
            {
                Email = userAccountDto.Email,
                Password = BCrypt.Net.BCrypt.HashPassword(userAccountDto.Password),
            });

            return new UserAccountDto
            {
                Id = addedEntity.Id,
            };
        }
    }
}