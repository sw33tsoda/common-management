using Server.Constants;
using Server.Enums;

namespace Server.Exceptions
{
    public class UnauthorizedException : ServerException
    {
        public override ExceptionType Type { get; set; } = ExceptionType.Unauthorized;
        public override int StatusCode { get; set; } = StatusCodes.Status401Unauthorized;

        public UnauthorizedException(string message = CommonExceptionMessage.Unauthorized) : base(message)
        {
        }

        public UnauthorizedException(ExceptionDetailType detailType) : base(detailType switch
        {
            ExceptionDetailType.WrongPassword => UnauthorizedExceptionMessage.WrongPassword,
            _ => CommonExceptionMessage.ServerError,
        })
        {
            DetailType = detailType;
        }
    }
}