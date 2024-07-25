
using Server.Enums;

namespace Server.Models
{
    public class RequestError<D>
    {
        public RequestErrorType Type { get; set; }
        public D Data { get; set; }
        public int StatusCode { get; set; }
        public string Message { get; set; }
    }
}