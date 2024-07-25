
using Server.Enums;

namespace Server.Models
{
    public class RequestError
    {
        public RequestErrorType Type { get; set; }
        public int StatusCode { get; set; }
        public string Message { get; set; }
        public Guid CorrelationId { get; set; }
    }

    public class RequestError<D> : RequestError
    {
        public D Data { get; set; }
    }
}