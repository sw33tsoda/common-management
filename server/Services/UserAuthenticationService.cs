using Microsoft.IdentityModel.Tokens;
using Server.Interfaces;
using Server.Extensions;
using Server.Dtos;
using Server.Enums;
using Server.Entities;

namespace Server.Services
{
    public class UserAuthenticationService : IUserAuthenticationService
    {
        private readonly IUserService _userService;
        private readonly IJwtService _jwtService;
        private readonly ILogger<UserAuthenticationService> _logger;

        public UserAuthenticationService(IUserService userService, IJwtService jwtService, ILogger<UserAuthenticationService> logger)
        {
            _userService = userService;
            _jwtService = jwtService;
            _logger = logger;
        }

        public bool CheckPasswordMatch(string? givenPassword, string? storedPassword)
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

        public async Task<bool> CheckAuthenticationLegit(LoginParamsDto loginParamsDto)
        {
            var user = await _userService.GetUserAccountByEmail(loginParamsDto.Email);

            if (user == null)
            {
                throw new Exception("User does not exist");
            }

            return CheckPasswordMatch(loginParamsDto.Password, user.Password);
        }

        public async Task<LoginResponseDto> Authenticate(LoginParamsDto loginParamsDto)
        {
            if (!await CheckAuthenticationLegit(loginParamsDto))
            {
                throw new Exception("Password is not matched");
            }

            var token = await _jwtService.GenerateToken(loginParamsDto.Email);

            return new LoginResponseDto
            {
                Token = token
            };
        }

        public async Task<RegisterResponseDto> Register(RegisterParamsDto registerParamsDto)
        {
            var addedUserAccountEntity = await _userService.AddUserAccount(new UserAccountEntity
            {
                Email = registerParamsDto.Email,
                Password = BCrypt.Net.BCrypt.HashPassword(registerParamsDto.Password),
                UserRole = UserRole.Anonymous,
                CreatedAt = DateTime.UtcNow,
                ModifiedAt = DateTime.UtcNow
            });
            ArgumentNullException.ThrowIfNull(addedUserAccountEntity);
            var addedUserProfileEntity = await _userService.AddUserProfile(new UserProfileEntity
            {
                UserAccountId = addedUserAccountEntity.Id,
                IsProfileInUse = true,
                CreatedAt = DateTime.UtcNow,
                ModifiedAt = DateTime.UtcNow,
            });
            ArgumentNullException.ThrowIfNull(addedUserProfileEntity);
            var userAccountDto = new UserAccountDto
            {
                Email = addedUserAccountEntity.Email
            };

            return new RegisterResponseDto
            {
                UserAccount = userAccountDto
            };
        }
    }
}