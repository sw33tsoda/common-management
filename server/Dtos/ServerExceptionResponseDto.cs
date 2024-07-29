
using Server.Enums;

namespace Server.Dtos
{
    public class ServerExceptionResponseDto
    {
        public ExceptionType Type { get; set; }
        public ExceptionDetailType DetailType { get; set; }
        public int StatusCode { get; set; }
        public string Message { get; set; }
        public Guid CorrelationId { get; set; }
    }

    public class ServerExceptionResponseDto<D> : ServerExceptionResponseDto
    {
        public D Data { get; set; }
    }
}