using Server.Constants;
using Server.Enums;

namespace Server.Exceptions
{
    public class ServerException(string message = ExceptionMessage.ServerError) : Exception(message)
    {
        public virtual RequestErrorType Type { get; set; } = RequestErrorType.ServerError;
        public virtual int StatusCode { get; set; } = StatusCodes.Status500InternalServerError;
        public Guid CorrelationId { get; set; } = Guid.NewGuid();
    }
}