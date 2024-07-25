using Newtonsoft.Json;
using Server.Exceptions;
using Server.Models;

namespace Server.Middlewares
{
    public class ErrorHandlerMiddleware
    {
        private readonly RequestDelegate _next;
        private readonly ILogger<ErrorHandlerMiddleware> _logger;

        public ErrorHandlerMiddleware(RequestDelegate next, ILogger<ErrorHandlerMiddleware> logger)
        {
            _next = next;
            _logger = logger;
        }

        public async Task InvokeAsync(HttpContext context)
        {
            try
            {
                await _next(context);
            }
            catch (ServerException exception)
            {
                await HandleExceptionAsync(context, exception);
                HandleLogException(exception.CorrelationId, exception.ToString());

            }
            catch (Exception exception)
            {
                var manualException = new ServerException();
                HandleLogException(manualException.CorrelationId, exception.ToString());
                await HandleExceptionAsync(context, manualException);
            }
        }

        private async Task HandleExceptionAsync<E>(HttpContext context, E exception) where E : ServerException
        {
            context.Response.StatusCode = exception.StatusCode;
            context.Response.ContentType = "application/json";
            var errors = JsonConvert.SerializeObject(new RequestError
            {
                Message = exception.Message,
                StatusCode = exception.StatusCode,
                Type = exception.Type,
                CorrelationId = exception.CorrelationId,
            });
            await context.Response.WriteAsync(errors);
        }

        private void HandleLogException(Guid correlationId, string message)
        {
            _logger.LogInformation($"(CorrelationId: {correlationId}): {message}");
        }
    }
}