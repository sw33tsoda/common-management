using System.Net;
using System.Text;
using System.Text.Json;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Server.Attributes;
using Server.Helpers;

namespace Server.Middlewares
{
    public class DtoValidationMiddleware
    {
        private readonly RequestDelegate _next;
        private readonly ILogger<DtoValidationMiddleware> _logger;

        public DtoValidationMiddleware(RequestDelegate next, ILogger<DtoValidationMiddleware> logger)
        {
            _next = next;
            _logger = logger;
        }

        public async Task InvokeAsync(HttpContext context)
        {
            var endpoint = context.GetEndpoint();
            if (endpoint != null)
            {
                var attribute = endpoint.Metadata.GetMetadata<DtoValidateAttribute>();
                if (attribute != null)
                {
                    var dtoType = attribute.DtoType;
                    context.Request.EnableBuffering();
                    context.Request.Body.Position = 0;
                    using var reader = new StreamReader(context.Request.Body);
                    var body = await reader.ReadToEndAsync();
                    context.Request.Body.Position = 0;
                    var dto = JsonConvert.DeserializeObject(body, dtoType);
                    if (dto != null)
                    {
                        var isDtoValid = CommonHelper.DtoValidate(dto, out var validationResults);
                        if (isDtoValid)
                        {
                            await _next(context);
                        }
                        else
                        {
                            context.Response.StatusCode = StatusCodes.Status400BadRequest;
                            context.Response.ContentType = "application/json";
                            await context.Response.WriteAsync(JsonConvert.SerializeObject(validationResults));
                        }
                    }
                }
            }
        }
    }
}