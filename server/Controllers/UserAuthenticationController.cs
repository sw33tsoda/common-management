using Asp.Versioning;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Server.Interfaces;
using Server.Dtos;
using Server.Attributes;

namespace Server.Controllers
{
    [ApiVersion("1.0")]
    [Route("api/auth")]
    [ApiController]
    public class UserAuthenticationController : ControllerBase
    {
        private readonly IUserAuthenticationService _userAuthenticationService;

        public UserAuthenticationController(IUserAuthenticationService userAuthenticationService)
        {
            _userAuthenticationService = userAuthenticationService;
        }

        [AllowAnonymous]
        [DtoValidate(typeof(UserAccountDto))]
        [HttpPost("login")]
        public async Task<IActionResult> Login(UserAccountDto userAccountDto)
        {
            var token = await _userAuthenticationService.Authenticate(userAccountDto);
            return Ok(token);
        }

        [AllowAnonymous]
        [DtoValidate(typeof(UserAccountDto))]
        [HttpPost("register")]
        public async Task<UserAccountDto> Register(UserAccountDto userAccountDto)
        {
            return await _userAuthenticationService.Register(userAccountDto);
        }
    }
}