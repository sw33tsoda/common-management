using Server.Constants;
using Server.Enums;

namespace Server.Exceptions
{
    public class ResourceNotFoundException(string message = ExceptionMessage.ResourceNotFound) : ServerException(message)
    {
        public override RequestErrorType Type { get; set; } = RequestErrorType.ResourceNotFound;
        public override int StatusCode { get; set; } = StatusCodes.Status404NotFound;
    }
}