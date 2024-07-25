using Server.Constants;
using Server.Enums;

namespace Server.Exceptions
{
    public class UnauthorizedException(string message = ExceptionMessage.Unauthorized) : ServerException(message)
    {
        public override RequestErrorType Type { get; set; } = RequestErrorType.Unauthorized;
        public override int StatusCode { get; set; } = StatusCodes.Status401Unauthorized;
    }
}