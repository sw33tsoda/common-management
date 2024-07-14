using Microsoft.IdentityModel.Tokens;
using Server.Interfaces;
using Server.Extensions;
using Server.Models;

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

        public async Task<bool> CheckAuthenticationLegit(UserAccountDto userAccountDto)
        {
            var user = await _userService.GetUserAccountByEmail(userAccountDto.Email);

            if (user == null)
            {
                throw new Exception("User does not exist");
            }

            return CheckPasswordMatch(userAccountDto.Password, user.Password);
        }

        public async Task<string?> Authenticate(UserAccountDto userAccountDto)
        {
            if (!await CheckAuthenticationLegit(userAccountDto))
            {
                return null;
            }

            return _jwtService.GenerateToken(userAccountDto);
        }

        public async Task Register(UserAccountDto userAccountDto)
        {
            await _userService.CreateUserAccount(userAccountDto);
        }
    }
}