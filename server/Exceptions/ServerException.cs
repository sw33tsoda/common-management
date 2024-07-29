using Server.Constants;
using Server.Enums;

namespace Server.Exceptions
{
    public class ServerException(string message = CommonExceptionMessage.ServerError) : Exception(message)
    {
        public virtual ExceptionType Type { get; set; } = ExceptionType.ServerError;
        public virtual ExceptionDetailType DetailType { get; set; } = ExceptionDetailType.ServerError;
        public virtual int StatusCode { get; set; } = StatusCodes.Status500InternalServerError;
        public Guid CorrelationId { get; set; } = Guid.NewGuid();
    }
}