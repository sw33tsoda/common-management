using Asp.Versioning;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Server.Interfaces;
using Server.Dtos;
using Microsoft.Extensions.Options;
using Server.Models;

namespace Server.Controllers
{
    [ApiVersion("1.0")]
    [Route("api/auth")]
    [ApiController]
    public class UserAuthenticationController : ControllerBase
    {
        private readonly IUserAuthenticationService _userAuthenticationService;
        private readonly IOptions<JwtOptions> _jwtOptions;

        public UserAuthenticationController(IUserAuthenticationService userAuthenticationService, IOptions<JwtOptions> jwtOptions)
        {
            _userAuthenticationService = userAuthenticationService;
            ArgumentNullException.ThrowIfNull(jwtOptions.Value);
            _jwtOptions = jwtOptions;
        }

        [AllowAnonymous]
        [HttpPost("login")]
        public async Task<IActionResult> Login(LoginParamsDto loginParamsDto)
        {
            var dto = await _userAuthenticationService.Authenticate(loginParamsDto);

            Response.Cookies.Append("access_token", dto.Token, new CookieOptions
            {
                Expires = DateTimeOffset.UtcNow.AddMinutes(_jwtOptions.Value.Expires),
                Secure = true,
                HttpOnly = true,
                SameSite = SameSiteMode.Strict
            });

            return Ok(dto);
        }

        [AllowAnonymous]
        [HttpPost("register")]
        public async Task<RegisterResponseDto> Register(RegisterParamsDto registerParamsDto)
        {
            return await _userAuthenticationService.Register(registerParamsDto);
        }
    }
}