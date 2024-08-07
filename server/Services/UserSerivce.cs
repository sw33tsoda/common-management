using Server.Entities;
using Server.Interfaces;
using Server.Dtos;
using Server.Exceptions;
using Server.Enums;
using Server.Models;

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
                throw new ResourceNotFoundException(ExceptionDetailType.UserDoesNotExist);
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
                throw new ResourceNotFoundException(ExceptionDetailType.UserDoesNotExist);
            }

            return new UserAccountDto
            {
                Id = entity.Id,
                Email = entity.Email,
                Password = entity.Password
            };
        }

        public ResourcePermission GetUserBasicPermissionsForNewMember()
        {
            var systemResourcePermission = new SystemResourcePermission().GetTree();
            systemResourcePermission.AllowView = true;
            systemResourcePermission.ChildPermission[ResourcePermissionId.UserAccountPermission].AllowView = true;
            systemResourcePermission.ChildPermission[ResourcePermissionId.UserAccountPermission].AllowUpdate = true;
            systemResourcePermission.ChildPermission[ResourcePermissionId.UserAccountPermission].ChildPermission[ResourcePermissionId.UserAccountPasswordPermission].AllowView = true;
            systemResourcePermission.ChildPermission[ResourcePermissionId.UserAccountPermission].ChildPermission[ResourcePermissionId.UserAccountPasswordPermission].AllowUpdate = true;

            return systemResourcePermission;
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