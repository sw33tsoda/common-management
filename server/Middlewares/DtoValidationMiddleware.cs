using Microsoft.AspNetCore.Mvc.Controllers;
using Newtonsoft.Json;
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
                var controllerActionDescriptor = endpoint.Metadata.GetMetadata<ControllerActionDescriptor>();
                if (controllerActionDescriptor != null)
                {
                    var parameter = controllerActionDescriptor.Parameters.FirstOrDefault(p => p.ParameterType.IsClass);
                    if (parameter != null)
                    {
                        var dtoType = parameter.ParameterType;
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
                else
                {
                    await _next(context);
                }
            }
        }
    }
}