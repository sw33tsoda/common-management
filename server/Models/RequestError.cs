using Newtonsoft.Json;
using Server.Enums;

namespace Server.Models
{
    public class RequestError<T>
    {
        public RequestErrorType Type { get; set; }
        public T Data { get; set; }
    }
}