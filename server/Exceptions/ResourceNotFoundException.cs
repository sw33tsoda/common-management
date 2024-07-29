using Server.Constants;
using Server.Enums;

namespace Server.Exceptions
{
    public class ResourceNotFoundException : ServerException
    {
        public override ExceptionType Type { get; set; } = ExceptionType.ResourceNotFound;
        public override int StatusCode { get; set; } = StatusCodes.Status404NotFound;

        public ResourceNotFoundException(string message = CommonExceptionMessage.ServerError) : base(message)
        {
        }

        public ResourceNotFoundException(ExceptionDetailType detailType) : base(detailType switch
        {
            ExceptionDetailType.UserDoesNotExist => ResourceNotFoundExceptionMessage.UserDoesNotExist,
            _ => CommonExceptionMessage.ServerError,
        })
        {
            DetailType = detailType;
        }
    }
}