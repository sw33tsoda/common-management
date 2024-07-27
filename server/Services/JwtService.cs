using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using Server.Interfaces;
using Server.Models;
using Server.Exceptions;

namespace Server.Services
{
    public class JwtService : IJwtService
    {
        private readonly JwtOptions _options;
        private readonly IUserService _userService;

        public JwtService(IOptions<JwtOptions> options, IUserService userService)
        {
            ArgumentNullException.ThrowIfNull(options.Value);
            _options = options.Value;
            _userService = userService;
        }

        public async Task<string> GenerateToken(string email)
        {
            ArgumentNullException.ThrowIfNull(email);
            var userAccountEntity = await _userService.GetUserAccountByEmail(email);
            ArgumentNullException.ThrowIfNull(userAccountEntity);
            var key = Encoding.ASCII.GetBytes(_options.Key);
            var securityKey = new SymmetricSecurityKey(key);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(
                [
                new Claim(ClaimTypes.NameIdentifier, userAccountEntity.Id.ToString()),
                new Claim(ClaimTypes.Email, userAccountEntity.Email),
                new Claim(ClaimTypes.Role, userAccountEntity.UserRole.ToString()),
            ]),
                Expires = DateTime.UtcNow.AddMinutes(_options.Expires),
                Issuer = _options.Issuer,
                Audience = _options.Audience,
                SigningCredentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256Signature)
            };
            var tokenHandler = new JwtSecurityTokenHandler();
            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }
    }
}