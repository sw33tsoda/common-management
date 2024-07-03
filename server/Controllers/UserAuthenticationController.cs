using Asp.Versioning;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Server.Interfaces;

namespace Server.Controllers
{
    [ApiVersion("1.0")]
    [Route("api")] // Bad prac tice 
    [ApiController]
    public class UserAuthenticationController : ControllerBase
    {
        private readonly ILogger<UserAuthenticationController> _logger;
        private readonly IUserAuthenticationService _userAuthenticationService;
        private readonly IJwtService _jwtService;

        public UserAuthenticationController(ILogger<UserAuthenticationController> logger, IUserAuthenticationService userAuthenticationService, IJwtService jwtService)
        {
            _userAuthenticationService = userAuthenticationService;
            _jwtService = jwtService;
            _logger = logger;
        }

        [AllowAnonymous]
        [HttpPost("generatetoken")]
        public IActionResult GenerateToken()
        {
            return Ok("Nice");
        }
    }
}