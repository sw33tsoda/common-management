using Microsoft.IdentityModel.Tokens;
using Server.Entities;
using Server.Interfaces;
using Server.Models;

namespace Server.Services
{
    public class UserAuthenticationService : IUserAuthenticationService
    {
        private readonly IRepositoryService _repository;

        public UserAuthenticationService(IRepositoryService repository)
        {
            _repository = repository;
        }

        public UserAccountDto? GetUserAccount(Guid? userId)
        {
            if (userId != null || userId == Guid.Empty)
            {
                throw new ArgumentNullException(nameof(userId), "cannot be null or empty");
            }

            var entity = _repository.Find<UserAccountEntity>(entity => entity.Id == userId);

            return ConvertUserAccountEntityToDto(entity);
        }

        private static UserAccountDto? ConvertUserAccountEntityToDto(UserAccountEntity? entity)
        {
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

        public bool IsAuthenticated(string? givenPassword, string? storedPassword)
        {
            if (givenPassword.IsNullOrEmpty())
            {
                throw new ArgumentNullException(nameof(givenPassword), "cannot be null or empty");
            }
            else if (storedPassword.IsNullOrEmpty())
            {
                throw new ArgumentNullException(nameof(storedPassword), "cannot be null or empty");
            }

            return BCrypt.Net.BCrypt.Verify(givenPassword, storedPassword);
        }
    }
}