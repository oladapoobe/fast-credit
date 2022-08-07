
using API.ClassModel;
using API.Infrastructure;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;



namespace Customer.WebApi.Middlewares
{
    public class ExceptionAPIKeyHandlerMiddleware
    {
        private readonly RequestDelegate next;
        const string APIKEY = "Key";
        public static readonly log4net.ILog log = log4net.LogManager.GetLogger(System.Reflection.MethodBase.GetCurrentMethod().DeclaringType);

        public ExceptionAPIKeyHandlerMiddleware(RequestDelegate _next)
        {
            next = _next ?? throw new ArgumentNullException(nameof(_next));
        }

        public async Task InvokeAsync(HttpContext context)
        {
            try
            {
               
                string extractedApiKey = context.Request.Headers["X-SAP-LogonToken"];

                
                if (String.IsNullOrEmpty(extractedApiKey) == true)
                {
                    context.Response.StatusCode = 401;
                    await context.Response.WriteAsync("Api Key was not provided ");
                    return;
                }
                var appSettings = context.RequestServices.GetRequiredService<IConfiguration>();
                var apiKey = appSettings.GetSection("jwtTokenConfig").Get<JwtTokenConfig>().Key;
                if (!apiKey.Equals(extractedApiKey))
                {
                    context.Response.StatusCode = 401;
                    await context.Response.WriteAsync("Unauthorized client");
                    return;
                }
                await next(context);
            }
            catch (Exception ex)
            {
                var message = CreateMessage(context, ex);
                log.Error(message, ex);

                await HandleExceptionAsync(context, ex);
            }
        }

        public async Task HandleExceptionAsync(HttpContext context, Exception e)
        {
            var result = new ClsReturnMessage() { success = false,  message = e.Message , id="" };
            int statusCode;

            if (e is ArgumentException || e is ArgumentNullException)
            {
                statusCode = StatusCodes.Status400BadRequest;
            }
           
            else
            {
                statusCode = StatusCodes.Status500InternalServerError;
                result.message = "Unknown error, please contact the system admin";
            }

            log.Error(e.Message,e);

            var response = JsonConvert.SerializeObject(result, Formatting.Indented,
                new JsonSerializerSettings
                {
                    NullValueHandling = NullValueHandling.Ignore
                });

            context.Response.StatusCode = statusCode;
            await context.Response.WriteAsync(response);
        }

        public string CreateMessage(HttpContext context, Exception e)
        {
            var message = $"Exception caught in global error handler, exception message: {e.Message}, exception stack: {e.StackTrace}";

            if (e.InnerException != null)
            {
                message = $"{message}, inner exception message {e.InnerException.Message}, inner exception stack {e.InnerException.StackTrace}";
            }

            return $"{message} RequestId: {context.TraceIdentifier}";
        }


      

       
    }    
}
